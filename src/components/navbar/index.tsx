import { Link, useNavigate } from 'react-router-dom';
import personIcon from '@/assets/icons/icons8-person-64.png';
import personIconBlack from '@/assets/icons/icons8-person-64-black.png';
import cartIcon from '@/assets/icons/icons8-shopping-cart-64.png';
import { ShoppingCart } from 'lucide-react';
import logoutIcon from '@/assets/icons/icons8-logout-50.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { clearAllCookies } from '@/lib/utils';
import { Input } from '../ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { resetCart } from '@/features/cart/cartSlice';

export const Navbar = () => {
  const navTo = useNavigate();
  
  const dispatch: AppDispatch = useDispatch()
  const items = useSelector((item: RootState) => item.cart.items)
  const sum = items.reduce((total, item) => total + item.quantity, 0)

  const onLogout = () => {
    dispatch(resetCart())
    clearAllCookies();
    navTo('/login');
  };

  return (
    <div className="z-50 flex bg-black text-white xl:p-4 p-3 xl:text-xl lg:text-lg text-md sticky top-0 w-full">
      <div className='flex items-center justify-between w-full mx-12'>
        <Link to={'/home'} className='my-auto'>
          <div className="font-bold">LOGO</div>
        </Link>
        <div className='my-auto relative w-full text-lg mx-32 flex'>
          <div className='my-auto mr-4'>Category</div>
          <Input className='border-none rounded-sm w-full text-black' type="text" placeholder="Search" />
        </div>
        <div className="flex flex-row justify-end gap-6 items-center mx-4">
          <div className="relative">
            <Link to={'/cart'}>
              <ShoppingCart/>
              <span className='absolute top-0 right-0 rounded-full bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center'>{sum}</span>
            </Link>
          </div>
        </div>
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className=" flex justify-center items-center rounded-full p-2 w-10 bg-gray-600">
                <img src={personIcon} alt="" height={25} width={25} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to={'/profile'}>
                <DropdownMenuItem>
                  <div className="flex flex-row gap-2 items-center">
                    <img src={personIconBlack} alt="" height={16} width={16} />
                    <p>Profile</p>
                  </div>
                </DropdownMenuItem>
              </Link>
              <Link to={'/cart'}>
                <DropdownMenuItem>
                  <div className="flex flex-row gap-2 items-center">
                    <img src={cartIcon} height={16} width={16} />
                    <p>Cart</p>
                  </div>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <div
                  onClick={onLogout}
                  className="flex flex-row gap-2 items-center"
                >
                  <img src={logoutIcon} alt="" height={16} width={16} />
                  <p>Logout</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
