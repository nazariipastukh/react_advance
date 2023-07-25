import {Outlet} from "react-router-dom";
import {Header} from '../components'
import styles from '../components/Components.module.css'
import {LeftBar} from "../components/leftBar/LeftBar";

export const MainLayout = () => {
    return (
        <div>
            <div className={styles.headerWrap}>
                <Header/>
            </div>


            <div className={styles.main}>
                <LeftBar/>
                <Outlet/>
            </div>

        </div>
    )
}