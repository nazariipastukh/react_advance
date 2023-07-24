import {NavLink} from "react-router-dom";
import styles from '../Components.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to={''}>Main Page</NavLink>
            <NavLink to={'simpsons'}>Simpsons</NavLink>
            <NavLink to={'rickmorty'}>Rick And Morty</NavLink>
        </div>
    )
}