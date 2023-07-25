import {useEffect, useState} from "react";
import {Post} from './Post'
import styles from '../Components.module.css'
import {postService} from "../../services/postService";

export const PostsComponent = () => {
    const [posts, setPosts] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        postService.getAll()
            .then(({data}) => {
                setPosts(data)
            })
    }, [])

    const handleShowPost = (id) => {
        const selectedPost = posts.find(post => id === post.id)
        setSelected(selectedPost)
    }

    return (
        <div>
            {selected && (
                <div className={styles.post} id={styles.postInfo}>
                    {<h2>{selected.id} - {selected.userId}</h2>}
                    {<h3>{selected.title}</h3>}
                    {<h4>{selected.body}</h4>}
                </div>
            )}
            <div className={styles.wrapper}>
                {posts.map(post => (
                    <Post key={post.id}
                          post={post}
                          handleShowPost={handleShowPost}
                          selected={selected}
                    />
                ))}
            </div>
        </div>
    )
}