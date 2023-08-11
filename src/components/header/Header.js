import {NavLink} from "react-router-dom";
import styles from '../Components.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink className={styles.headerNav} to={''}>Main Page</NavLink>
        </div>
    )
}