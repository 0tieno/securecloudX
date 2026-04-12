export const BLOGS_PATH = "/blog/";

export const blogFiles = [
    {
        filename: "pentester-ports.md",
        date: "2025-09-03",
        author: "s!rr0nn3y",
        tags: ["pentesting", "networking", "security"],
    },
    {
        filename: "data-privacy-in-azure.md",
        date: "2025-10-01",
        author: "s!rr0nn3y",
        tags: ["azure", "privacy", "cloudsecurity", "OctoberChallenge"],
    },
    {
        filename: "azure-storage-security-basics.md",
        date: "2025-10-02",
        author: "s!rr0nn3y",
        tags: ["azure", "storage", "security"],
    },
    {
        filename: "azure-storage-account-keys.md",
        date: "2025-10-03",
        author: "s!rr0nn3y",
        tags: ["azure", "storage", "security"],
    },
    {
        filename: "create-a-key-expiration-policy.md",
        date: "2025-10-04",
        author: "s!rr0nn3y",
        tags: ["azure", "storage", "security"],
    },
    {
        filename: "check-for-key-expiration-policy-violations.md",
        date: "2025-10-05",
        author: "s!rr0nn3y",
        tags: ["azure", "storage", "security"],
    },
    {
        filename: "monitor-compliance.md",
        date: "2025-10-06",
        author: "s!rr0nn3y",
        tags: ["azure", "storage", "security"],
    },
];

export const LABS_PATH = "/labs/";

export const labFiles = [
    {
        filename: "lab-example.md",
        title: "Security Fundamentals",
        difficulty: "Beginner",
        category: "Information Gathering",
        estimatedTime: "45",
        tools: ["nmap", "dig", "whois"],
        description:
            "Learn the basics of information gathering and reconnaissance techniques",
    },
];

export function extractMetadataFromMarkdown(markdown) {
    const lines = markdown.split("\n");
    const title =
        lines.find((line) => line.startsWith("# "))?.replace("# ", "") ||
        "Untitled";
    const contentLines = lines.filter(
        (line) =>
            !line.startsWith("#") &&
            line.trim() !== "" &&
            !line.startsWith("---") &&
            !line.startsWith("_Posted on")
    );
    const excerpt = `${contentLines.slice(0, 2).join(" ").slice(0, 150)}...`;
    const wordCount = markdown.split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    return { title, excerpt, readingTime };
}

export function extractLabMetadata(markdown) {
    const lines = markdown.split("\n");
    const title =
        lines.find((line) => line.startsWith("# "))?.replace("# ", "") ||
        "Untitled Lab";
    const contentLines = lines.filter(
        (line) =>
            !line.startsWith("#") &&
            line.trim() !== "" &&
            !line.startsWith("---") &&
            !line.startsWith("##")
    );
    const overview = `${contentLines.slice(0, 2).join(" ").slice(0, 200)}...`;
    const hasExercises =
        markdown.includes("## Exercises") || markdown.includes("## Exercise");

    return { title, overview, hasExercises };
}