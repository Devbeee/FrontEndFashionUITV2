export interface IHotNews {
    title: string;
    link: string;
    date: string;
    image: string;
}

export interface IBlog {
    title: string;
    slug: string;
    createdAt: string;
    description: string;
    shortdesc: string;
}

export interface INewsCardProps {
    blog: IBlog;
}