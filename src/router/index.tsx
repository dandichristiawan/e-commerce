import { Navigate, useRoutes, RouteObject } from 'react-router-dom';
import { LoginPage } from '../pages/login/login-page';
import { HomePage } from '@/pages/home/home-page';
import { ProfilePage } from '@/pages/profile/profile-page';
import Cookies from 'js-cookie';

const Routes = () => {
  const isTokenExist = Cookies.get('token');
  const unprotectedRoutes: RouteObject[] = [
    {
      path: `/login`,
      element: <LoginPage />,
    },
  ];

  const protectedRoutes: RouteObject[] = [
    {
      path: '/home',
      element: isTokenExist ? <HomePage /> : <Navigate to="/login" />,
    },
    {
      path: '/profile',
      element: isTokenExist ? <ProfilePage /> : <Navigate to="/login" />,
    },
    // {
    //     path: '/detail/:id',

    // }
  ];

  const allRoutes: RouteObject[] = [...unprotectedRoutes, ...protectedRoutes];

  return allRoutes;
};

export default function Router() {
  const useRouter = Routes();
  return useRoutes(useRouter);
}
