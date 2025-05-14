import { Outlet } from "react-router";
import AppHeader from "../header/header";
import styles from './pageLayout.module.css';
export const PageLayout = () => {
    return (
        <div className={styles.pageLayout}>
            <AppHeader />
            <Outlet />
        </div>
    )
}