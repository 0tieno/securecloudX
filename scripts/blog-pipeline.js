import fs from "fs";
import path from "path";

const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

const toTitleFromFilename = (filename) => {
    const basename = filename.replace(/\.md$/i, "");
    return basename
        .split("-")
        .filter(Boolean)
        .map((part) => part[0].toUpperCase() + part.slice(1))
        .join(" ");
};

const stripQuotes = (value) => value.replace(/^['"]|['"]$/g, "");

const splitFrontmatter = (markdown) => {
    const match = markdown.match(FRONTMATTER_PATTERN);

    if (!match) {
        return { metadata: {}, content: markdown };
    }

    return {
        metadata: parseFrontmatter(match[1]),
        content: markdown.slice(match[0].length),
    };
};

const parseFrontmatter = (frontmatterRaw) => {
    const metadata = {};
    let currentArrayKey = null;

    for (const line of frontmatterRaw.split(/\r?\n/)) {
        const trimmed = line.trim();

        if (!trimmed) {
            continue;
        }

        const arrayMatch = line.match(/^\s*-\s+(.*)$/);
        if (arrayMatch && currentArrayKey && Array.isArray(metadata[currentArrayKey])) {
            metadata[currentArrayKey].push(stripQuotes(arrayMatch[1].trim()));
            continue;
        }

        const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
        if (!keyMatch) {
            currentArrayKey = null;
            continue;
        }

        const [, key, rawValue] = keyMatch;
        if (rawValue === "") {
            metadata[key] = [];
            currentArrayKey = key;
            continue;
        }

        metadata[key] = stripQuotes(rawValue.trim());
        currentArrayKey = null;
    }

    return metadata;
};

const extractTitle = (content, filename) => {
    const heading = content
        .split(/\r?\n/)
        .find((line) => line.trim().startsWith("# "));

    if (heading) {
        return heading.replace(/^#\s+/, "").trim();
    }

    return toTitleFromFilename(filename);
};

const extractExcerpt = (content, limit = 170) => {
    const excerptLine = content
        .split(/\r?\n/)
        .map((line) => line.trim())
        .find(
            (line) =>
                line &&
                !line.startsWith("#") &&
                !line.startsWith("```") &&
                !line.startsWith("---")
        );

    if (!excerptLine) {
        return "No excerpt available.";
    }

    return excerptLine.length > limit
        ? `${excerptLine.slice(0, limit).trimEnd()}...`
        : excerptLine;
};

const getReadingTime = (content) => {
    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 200));
};

export const buildBlogManifest = (blogsDir) => {
    const files = fs
        .readdirSync(blogsDir)
        .filter((file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md");

    const posts = files
        .map((filename) => {
            const fullPath = path.join(blogsDir, filename);
            const markdown = fs.readFileSync(fullPath, "utf8");
            const stats = fs.statSync(fullPath);
            const { metadata, content } = splitFrontmatter(markdown);
            const categories = Array.isArray(metadata.categories)
                ? metadata.categories
                : metadata.categories
                    ? [metadata.categories]
                    : [];

            return {
                filename,
                slug: filename.replace(/\.md$/i, ""),
                layout: metadata.layout || "post",
                title: metadata.title || extractTitle(content, filename),
                date: metadata.date || stats.mtime.toISOString(),
                categories,
                author: metadata.author || "s!rr0nn3y",
                excerpt: extractExcerpt(content),
                readingTime: getReadingTime(content),
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
        generatedAt: new Date().toISOString(),
        posts,
    };
};

export const syncBlogsAndManifest = ({
    blogsDir,
    publicBlogDir,
    log = console,
}) => {
    if (!fs.existsSync(blogsDir)) {
        fs.mkdirSync(blogsDir, { recursive: true });
    }

    if (!fs.existsSync(publicBlogDir)) {
        fs.mkdirSync(publicBlogDir, { recursive: true });
    }

    const sourceFiles = new Set(
        fs.readdirSync(blogsDir).filter((f) => f.endsWith(".md"))
    );

    for (const file of sourceFiles) {
        fs.copyFileSync(path.join(blogsDir, file), path.join(publicBlogDir, file));
    }

    // Remove stale files from public/blog/ that no longer exist in Docs/blogs/
    for (const file of fs.readdirSync(publicBlogDir)) {
        if (file.endsWith(".md") && !sourceFiles.has(file)) {
            fs.unlinkSync(path.join(publicBlogDir, file));
        }
    }

    const manifest = buildBlogManifest(blogsDir);
    fs.writeFileSync(
        path.join(publicBlogDir, "blog-manifest.json"),
        JSON.stringify(manifest, null, 2)
    );

    log.log(`📝 Synced ${manifest.posts.length} markdown post(s) and generated blog-manifest.json`);
    return manifest;
};

export const createFrontmatterTemplate = ({ title, date, author = "s!rr0nn3y", categories = [] }) => {
    const normalizedCategories = categories.filter(Boolean);
    const categoryLines = normalizedCategories
        .map((category) => `  - ${category}`)
        .join("\n");

    return [
        "---",
        "layout: post",
        `title: ${title}`,
        `date: ${date}`,
        `author: ${author}`,
        "categories:",
        categoryLines || "  - General",
        "---",
        "",
    ].join("\n");
};