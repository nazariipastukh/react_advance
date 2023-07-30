import {NavLink} from "react-router-dom";
import styles from '../Components.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to={''}>Main Page</NavLink>
        </div>
    )
}