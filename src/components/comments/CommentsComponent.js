import {useState, useEffect} from "react";
import {commentService} from "../../services";
import {Comment} from "./Comment";
import styles from "../Components.module.css";

export const CommentsComponent = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll()
            .then(({data}) => {
                setComments(data)
            })
    }, [])

    return (
        <div className={styles.wrapper}>
            {comments.map(comment => (
                    <Comment key={comment.id} comment={comment}/>
                )
            )}
        </div>
    );
};