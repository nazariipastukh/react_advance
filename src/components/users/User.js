import {Company} from "./Company";
import {UserDetails} from "./UserDetails";
import {UserAddress} from "./UserAddress";
import styles from '../Components.module.css'

export const User = ({user}) => {
    const {id}=user

    return (
        <div className={styles.container} id={styles.user}>
            <UserDetails key={id} user={user}/>
            <UserAddress key={id} user={user}/>
            <Company key={id} user={user}/>
        </div>
    )
}