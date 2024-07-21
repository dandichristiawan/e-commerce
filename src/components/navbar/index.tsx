import { Link, useNavigate } from 'react-router-dom';
import personIcon from '@/assets/icons/icons8-person-64.png';
import personIconBlack from '@/assets/icons/icons8-person-64-black.png';
import cartIcon from '@/assets/icons/icons8-shopping-cart-64.png';
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

export const Navbar = () => {
  const navTo = useNavigate();

  const onLogout = () => {
    clearAllCookies();
    navTo('/login');
  };

  return (
    <div className="z-50 flex bg-black text-white xl:p-4 p-3 xl:text-xl lg:text-lg text-md sticky top-0 w-full">
      <div className='flex justify-between w-full mx-12'>
        <Link to={'/home'} className='my-auto'>
          <div className="font-bold">LOGO</div>
        </Link>
        <div className='my-auto relative w-full text-lg mx-32 flex'>
          <div className='my-auto mr-4'>Category</div>
          <input className='border-none rounded-sm p-1 w-full text-black ' type="text" name="" id="" placeholder='Search' />
        </div>
        <div className="flex flex-row justify-end gap-6 items-center w-1/2">
          <div className="">Posts</div>
          <div className="">Todos</div>
          <div className="">Recipes</div>
          <div className="">Quotes</div>
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
              <DropdownMenuItem>
                <div className="flex flex-row gap-2 items-center">
                  <img src={cartIcon} height={16} width={16} />
                  <p>Cart</p>
                </div>
              </DropdownMenuItem>
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
