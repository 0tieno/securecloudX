const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export const stripFrontmatter = (markdown = "") => {
    const match = markdown.match(FRONTMATTER_PATTERN);

    if (!match) {
        return markdown;
    }

    return markdown.slice(match[0].length);
};