import { Link } from 'react-router-dom';
import { getInitials } from '@/lib/utils';
import cartIcon from '@/assets/icons/icons8-shopping-trolley-64.png';

export const Navbar = () => {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  // const image = localStorage.getItem('profilePic');

  const fullName = `${firstName} + ${lastName}`;
  return (
    <div className="z-50 flex justify-between bg-black text-white xl:p-4 p-3 xl:text-xl lg:text-lg text-md sticky top-0 w-full">
      <div className="font-bold">LOGO</div>
      <div className="flex flex-row justify-end gap-8 items-center w-1/2">
        <div className="">Posts</div>
        <div className="">Todos</div>
        <div className="">Recipes</div>
        <div className="">Quotes</div>
        <div className="">
          <img src={cartIcon} height={25} width={25}/>
        </div>
        <Link to={'/profile'}>
          <div className="font-thin flex justify-center rounded-full p-2 w-10 bg-gray-600">
            {getInitials(fullName)}
          </div>
        </Link>
      </div>
    </div>
  );
};
