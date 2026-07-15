import type { ReactNode } from "react";
import { Header } from "../Header";
import  styles  from "./PageLayout.module.css";

type PageLayoutProps = {
    children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className={styles.pageLayout}>
            <Header />
            <div className={styles.pageLayoutContent}>{children}</div>
        </div>
    );
}