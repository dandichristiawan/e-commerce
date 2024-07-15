import { Navigate, useRoutes, RouteObject } from "react-router-dom";
import { LoginPage } from "../pages/login/login-page";
import { useAuthProvider } from "../auth";
import { HomePage } from "@/pages/home/home-page";

const Routes = () => {
    const { currentUser } = useAuthProvider()
    const unprotectedRoutes: RouteObject[] = [
        {
            path: `/login`,
            element: <LoginPage />
        }
    ]
    const protectedRoutes: RouteObject[] = [
        {
            path: '/home',
            element: currentUser ? <HomePage /> : <Navigate to="/login" />
        },
        // {
        //     path: '/detail/:id',

        // }
    ]

    const allRoutes: RouteObject[] = [...unprotectedRoutes, ...protectedRoutes]

    return allRoutes
}

export default function Router() {
    const useRouter = Routes();
    return useRoutes(useRouter)
}