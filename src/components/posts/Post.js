import styles from '../Components.module.css'

export const Post = ({post, handleShowPost}) => {
    const {id, title} = post

    return (
        <div className={styles.post}>
            <h2>Post: {id}.</h2>
            <h2 className={styles.postTitle}>{title}</h2>
            <button className={styles.postButton} onClick={() => handleShowPost(id)}>See post</button>
        </div>
    )
}