import { ReactElement, ReactNode } from "react";

export default interface IRoute {
    path: string;
    name: string;
    icon?: string;
    component: ReactElement | ReactNode;
};

