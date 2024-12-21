import AddReview from "../components/AddReview/AddReview";
import AllReview from "../components/AllReview/AllReview";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ";
import GameWatchList from "../components/GameWatchList/GameWatchList";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReview from "../components/MyReview/MyReview";
import UpdateReview from "../components/MyReview/UpdateReview";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ProductDetailsPage from "../components/ProductDetails/ProductDetailsPage";
import Registration from "../components/Registration/Registration";
import Root from "../components/Root/Root";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                 loader: () => fetch('http://localhost:5000/review'),
                
            },
            
            {
                path: "/home",
                element: <Home/>,
                 loader: () => fetch('http://localhost:5000/review'),
                
            },

            {
                path: "/allReviews",
                element: <AllReview/>,
                  loader: () => fetch('http://localhost:5000/reviews'),
                
                 
            },
            {
                path: "/addReviews",
                element: <PrivateRoute><AddReview/></PrivateRoute>

            },
            {
                path: "/myReviews",
                element: <PrivateRoute><MyReview/></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/reviews'),
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
            },


            {
                path: "/product-details/:id",
                element: <ProductDetailsPage/>,
                loader: () => fetch('http://localhost:5000/review'),
            },

          

            {
                path: "/faq",
                element: <FAQ/>
              },

              {
                path: "/update/:id",
                element: <PrivateRoute><UpdateReview/></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/reviews`),
              }


        ]
    },
    {
        path: "*",
        element: <ErrorPage/>,   
    },

]);

export default router;