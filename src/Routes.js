import { createBrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Statistics from "./Components/Statistics";
import Main from "./layouts/Main";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home />,
            loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        },
        {
            path: 'home',
            element: <Home />,
            loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        },
        {
            path: 'quiz/:id',
            element: <Quiz />,
            loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        {
            path: 'statistics',
            loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),
            element: <Statistics />
        },
        {
            path: 'blog',
            element: <Blog />
        }
    ]
}])
