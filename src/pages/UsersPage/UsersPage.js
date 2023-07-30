import {UsersComponent} from "../../components";
import {Outlet} from "react-router-dom";
import {createContext, useState} from "react";

export const ContextUser = createContext(null)

export const UsersPage = () => {
    const [userId, setUserId] = useState(null)

    return (
        <div>
            <Outlet context={{userId}}/>
            <ContextUser.Provider value={{setUserId}}>
                <UsersComponent/>
            </ContextUser.Provider>
        </div>
    )
}