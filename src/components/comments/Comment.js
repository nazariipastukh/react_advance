import styles from "../Components.module.css";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../pages";

export const Comment = ({comment}) => {
    const {id, name, email, body, postId} = comment

    const navigate = useNavigate()

    const {setCommentId} = useContext(Context)

    const handleClick = () => {
        navigate(`posts/${postId}`)
        setCommentId(id)
    }

    return (
        <div className={styles.post}>
            <h2>{name} </h2>
            <h3>{id} - {email} </h3>
            <h2 className={styles.postTitle}>{body}</h2>
            <button className={styles.postButton} onClick={handleClick}> View post</button>
        </div>
    );
};