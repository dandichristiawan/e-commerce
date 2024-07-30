import { Navigate, useRoutes, RouteObject } from 'react-router-dom';
import { LoginPage } from '../pages/login/login-page';
import { HomePage } from '@/pages/home/home-page';
import { ProfilePage } from '@/pages/profile/profile-page';
import Cookies from 'js-cookie';
import { ProductDetailPage } from '@/pages/product-detail/product-detail-page';
import CartPage from '@/pages/cart/cart-page';

const Routes = () => {
  const isTokenExist = Cookies.get('token');
  const unprotectedRoutes: RouteObject[] = [
    {
      path: `/aduh/login`,
      element: <LoginPage />,
    },
  ];

  const protectedRoutes: RouteObject[] = [
    {
      path: '/aduh/home',
      element: isTokenExist ? <HomePage /> : <Navigate to="/login" />,
    },
    {
      path: '/aduh/profile',
      element: isTokenExist ? <ProfilePage /> : <Navigate to="/login" />,
    },
    {
      path: '/aduh/product/:id',
      element: isTokenExist ? <ProductDetailPage /> : <Navigate to="/login" />,
    },
    {
      path: '/aduh/cart',
      element: isTokenExist? <CartPage/> : <Navigate to="/login" />
    }
  ];

  const allRoutes: RouteObject[] = [...unprotectedRoutes, ...protectedRoutes];

  return allRoutes;
};

export default function Router() {
  const useRouter = Routes();
  return useRoutes(useRouter);
}
