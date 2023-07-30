import {NavLink} from "react-router-dom";
import styles from '../Components.module.css'

export const LeftBar = () => {
    return (
        <div className={styles.leftBar}>
            <NavLink to={'simpsons'}>Simpsons</NavLink>
            <NavLink to={'rickmorty'}>Rick And Morty</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'launches'}>SpaceX Launches</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    )
}