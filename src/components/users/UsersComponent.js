import styles from '../Components.module.css'
import {User} from "./User";
import {userService} from '../../services/userService'
import {useState, useEffect} from "react";

export const UsersComponent = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll()
            .then(({data}) => {
                setUsers(data)
            })
    }, [])

    return (
        <div className={styles.wrapper}>
            {users.map(user =>
                <User key={user.id} user={user}/>
            )}
        </div>
    )
}