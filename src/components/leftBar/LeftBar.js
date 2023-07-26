import {NavLink} from "react-router-dom";
import styles from '../Components.module.css'

export const LeftBar = () => {
    return (
        <div className={styles.leftBar}>
            <NavLink className={styles.NavLink} to={'simpsons'}>Simpsons</NavLink>
            <NavLink className={styles.NavLink} to={'rickmorty'}>Rick And Morty</NavLink>
            <NavLink className={styles.NavLink} to={'posts'}>Posts</NavLink>
            <NavLink className={styles.NavLink} to={'launches'}>SpaceX Launches</NavLink>
            <NavLink className={styles.NavLink} to={'users'}>Users</NavLink>
        </div>
    )
}