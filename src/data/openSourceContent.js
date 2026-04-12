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