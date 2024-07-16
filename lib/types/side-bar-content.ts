export type MenuItem = {
    link: string;
    label: string;
    icon: JSX.Element;
};

export type MenuGroup = {
    group: string;
    items: MenuItem[];
};