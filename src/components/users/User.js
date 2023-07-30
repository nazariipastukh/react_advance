import {Company} from "./Company";
import {UserDetails} from "./UserDetails";
import {UserAddress} from "./UserAddress";
import styles from '../Components.module.css'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ContextUser} from "../../pages";

export const User = ({user}) => {
    const {id}=user

    const navigate = useNavigate()

    const {setUserId} = useContext(ContextUser)

    const handleClick = () => {
        navigate(`posts/${id}`)
        setUserId(id)
    }

    return (
        <div className={styles.container} id={styles.user}>
            <UserDetails key={id} user={user}/>
            <UserAddress key={id} user={user}/>
            <Company key={id} user={user}/>
            <button onClick={handleClick}> View posts </button>
        </div>
    )
}