import { type MarkdownInstance } from "astro";

export type Repo = {
    name: string;
    href: string;
};

export type ProjectFrontmatter = {
    title: string;
    description: string;
    stack: string[] | null;
    category: string;
    imageUrl: string;
    feature: boolean;
    date: string;
    repos: Repo[] | null;
    deployments: string[] | null;
};

export function getFrontmatter(p: MarkdownInstance<Record<string, any>>): ProjectFrontmatter {
    return p.frontmatter as ProjectFrontmatter;
}

export function getSlug(p: MarkdownInstance<Record<string, any>>): string {
    return p.file.split('/').pop()?.replace('.md', '') ?? '#';
}
