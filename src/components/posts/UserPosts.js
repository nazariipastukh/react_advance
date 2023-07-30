import styles from '../Components.module.css'

export const UserPosts = ({post/*, handleShowPost, selected*/}) => {
    const id = post[0]?.id; // Отримуємо id першого поста, якщо масив не порожній
    const title = post[0]?.title;

    return (
        <div className={styles.postInfoWrap}>
            <div className={styles.post} id={styles.postInfo}>
                <h2>Post: {id}.</h2>
                <h2 className={styles.postTitle}>{title}</h2>
                {/*<button className={styles.postButton}*/}
                {/*        onClick={() => handleShowPost(selectedPost)}>See post details*/}
                {/*</button>*/}
            </div>
            {/*{selected && (*/}
            {/*    <div className={styles.post} id={styles.postInfoComment}>*/}
            {/*        {<h2>Post: {selected.id}</h2>}*/}
            {/*        {<h3>{selected.title}</h3>}*/}
            {/*        {<h4>{selected.body}</h4>}*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )
}