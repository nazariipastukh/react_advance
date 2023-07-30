import {useEffect, useState} from "react";
import {UserPosts} from "./UserPosts";
import {userPostsService} from "../../services";
import {useParams} from "react-router-dom";

export const UserPostsComponent = () => {
    // const [selected, setSelected] = useState(null)
    const [userPosts, setUserPosts] = useState([])
    const {id} = useParams()

    useEffect(() => {
        userPostsService.getByUser(id)
            .then(({ data }) => {
                setUserPosts(data);
            })
            .catch((error) => {
                console.error("Error fetching user posts:", error);
                setUserPosts([]); // Опційно: якщо виникає помилка, встановити порожній масив постів
            });
    }, [id])
 console.log(userPosts)
    // const handleShowPost = (selectedPost) => {
    //     setSelected(selectedPost)
    // }

    return (
        <div>
            {userPosts &&
                <div>
                    {
                        userPosts.map(post=>(
                            <UserPosts key={post.id} post={post}/>
                        ))
                    }
                </div>
            }
                 {/*/*handleShowPost={handleShowPost}*/ /*selected={selected}*//>}*/}
        </div>
    )
}