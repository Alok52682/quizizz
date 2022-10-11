import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
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
            path: 'quiz/:id',
            element: <Quiz />,
            loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
    ]
}])