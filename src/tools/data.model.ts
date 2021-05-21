

export interface Jumbo {
    title: string;
    subtitle: string;
    description:string;
}

export interface Projects{
    projects: Project[];
}

export interface Project {
    title: string;
    subtitle: string;
    techs: string[];
    image: string;
    imageAlt: string;
    link: string;
    linkPlaceholder: string;
}