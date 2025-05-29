import { Outlet } from "react-router";
import styles from './pageLayout.module.css';
import AppHeader from "../../header/header";

export const PageLayout = () => {
    return (
        <div className={styles.pageLayout}>
            <AppHeader />
            <Outlet />
        </div>
    )
}