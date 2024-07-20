import React from 'react';
import { getInitials } from '@/lib/utils';
import { CurrentUserResponse } from './libs/definitions';
import { CurrentUserApi } from './libs/api';

export const Profile = () => {
  const [userData, setUserData] = React.useState<CurrentUserResponse>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function get() {
      setIsLoading(true);
      try {
        const res = await CurrentUserApi();
        setUserData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    get();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (userData)
    return (
      <div className="min-h-dvh flex flex-col items-center">
        <p>
          {userData.firstName} {userData.lastName}
        </p>
        <div className="rounded-full p-4 bg-gray-500 w-20 items-center text-center">
          <p className="text-5xl text-white">
            {getInitials(`${userData.firstName} ${userData.lastName}`)}
          </p>
        </div>
        <p>{userData.birthDate}</p>
        <p>{userData.age}</p>
        <p>{userData.address.address}</p>
        <p>{userData.email}</p>
        <p>{userData.gender}</p>
        <p>{userData.bank.currency}</p>
        <p>{userData.eyeColor}</p>
        <p>{userData.hair.color}</p>
        <p>{userData.height}</p>
      </div>
    );
};
