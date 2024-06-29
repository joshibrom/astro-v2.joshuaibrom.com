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
