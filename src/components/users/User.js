import {Company} from "./Company";
import {UserDetails} from "./UserDetails";
import {UserAddress} from "./UserAddress";
import styles from '../Components.module.css'

export const User = ({user}) => {
    return (
        <div className={styles.container} id={styles.user}>
            <UserDetails key={user.id} user={user}/>
            <UserAddress key={user.id} user={user}/>
            <Company key={user.id} user={user}/>
        </div>
    )
}