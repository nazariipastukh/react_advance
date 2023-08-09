import {useEffect, useState} from "react";
import {SelectedPost} from "./SelectedPost";
import {selectedPostService} from "../../services";
import {useParams} from "react-router-dom";

export const SelectedPostComponent = () => {
    const [selected, setSelected] = useState(null)
    const [selectedPost, setSelectedPost] = useState(null)
    const {postId} = useParams()

    useEffect(() => {
        selectedPostService.getById(postId)
            .then(({data}) => {
                setSelectedPost(data)
            })
    }, [postId])

    const handleShowPost = (selectedPost) => {
        setSelected(selectedPost)
    }

    return (
        <div>
            {selectedPost &&
                <SelectedPost selectedPost={selectedPost} handleShowPost={handleShowPost} selected={selected}/>}
        </div>
    )
}