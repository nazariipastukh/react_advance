import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from '../layouts/MainLayout'
import {RickPage, SimpsonsPage, PostsPage, LaunchesPage, UsersPage} from '../pages'
import {MainPage} from "../pages/MainPage";

export const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: 'simpsons',
                element: <SimpsonsPage/>
            },
            {
                path: 'rickmorty',
                element: <RickPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'launches',
                element: <LaunchesPage/>
            },
            {
                path: 'users',
                element: <UsersPage/>
            }
        ]
    }
])