import {CommentsComponent} from "../../components";
import {Outlet} from "react-router-dom";
import {createContext, useState} from "react";

export const Context = createContext(null)

export const CommentsPage = () => {
    const [commentId, setCommentId] = useState(null)

    return (
        <div>
            <Outlet context={{commentId}}/>
            <Context.Provider value={{setCommentId}}>
                <CommentsComponent/>
            </Context.Provider>
        </div>
    );
};