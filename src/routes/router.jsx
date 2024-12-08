import AddReview from "../components/AddReview/AddReview";
import AllReview from "../components/AllReview/AllReview";
import GameWatchList from "../components/GameWatchList/GameWatchList";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReview from "../components/MyReview/MyReview";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Registration from "../components/Registration/Registration";
import Root from "../components/Root/Root";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/allReviews",
                element: <AllReview/>
            },
            {
                path: "/addReviews",
                element: <PrivateRoute><AddReview/></PrivateRoute>
            },
            {
                path: "/myReviews",
                element: <PrivateRoute><MyReview/></PrivateRoute>
            },
            {
                path: "/gameWatchList",
                element: <PrivateRoute><GameWatchList/></PrivateRoute>
            },
            {
                path: "/login",
                element:<Login/>,
            },
            {
                path: "/registration",
                element: <Registration/>,
            }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },

]);

export default router;