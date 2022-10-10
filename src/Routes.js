import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./layouts/Main";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />,
            loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        }
    ]
}])