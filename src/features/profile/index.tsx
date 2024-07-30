import React from 'react';
import { Separator } from '@/components/ui/separator';
import { getInitials } from '@/lib/utils';
import { CurrentUserResponse } from './libs/definitions';
import { CurrentUserApi } from './libs/api';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

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

  if (isLoading) return (
    <div className='min-h-dvh text-center'>
      <p>Loading...</p>
    </div>
  )

  if (userData)
    return (
      <div className="min-h-dvh flex flex-row justify-center my-10">
        <div className="flex flex-col h-full w-2/5">
          <div className="shadow-md rounded-lg h-2/5 p-4 flex flex-col">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="rounded-full p-4 bg-gray-500 w-20 items-center text-center">
                <p className="text-5xl text-white">
                  {getInitials(`${userData.firstName} ${userData.lastName}`)}
                </p>
              </div>
              <p className="font-bold">
                {userData.firstName} {userData.maidenName} {userData.lastName}
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-row gap-2">
              <p className="font-bold">Role :</p>
              <p className="font-semibold">{userData.role}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">User ID :</p>
              <p className="font-semibold">{userData.id}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Username :</p>
              <p className="font-semibold">{userData.username}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">E-mail :</p>
              <p className="font-semibold">{userData.email}</p>
            </div>
          </div>
          <div className="shadow-xl rounded-lg h-2/5 p-4 flex flex-col mt-4">
            <h1 className="font-bold mt-4 mb-2">Employment History</h1>
            <Separator className="mb-4" />
            <p>
              {userData.company.name} - {userData.company.department}
            </p>
            <p>{userData.company.title}</p>
            <p>
              {userData.company.address.address} -
              {userData.company.address.city} {userData.company.address.country}
              {userData.company.address.state}
            </p>
            <p>
              {userData.company.address.postalCode}
              {userData.company.address.stateCode}
              {userData.company.address.coordinates.lat}
              {userData.company.address.coordinates.lng}
            </p>
            <h1 className="font-bold mt-4 mb-2">Bank</h1>
            <Separator className="mb-4" />
            <p>{userData.bank.cardType}</p>
            <p>{userData.bank.cardNumber}</p>
            <p>{userData.bank.currency}</p>
            <p>{userData.bank.iban}</p>
          </div>
        </div>
        <div className="shadow-xl rounded-lg w-1/2 h-2/5 p-4 flex flex-col m-4">
          <h1 className="font-bold my-2">General Information</h1>
          <div className="">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Age :</TableCell>
                  <TableCell className="text-left">{userData.age}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Birth Date :</TableCell>
                  <TableCell className="text-left">
                    {userData.birthDate}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Blood Type :</TableCell>
                  <TableCell className="text-left">
                    {userData.bloodGroup}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gender :</TableCell>
                  <TableCell className="text-left">
                    {userData.gender === 'male' ? <>Male</> : <>Female</>}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Height :</TableCell>
                  <TableCell className="text-left">
                    {userData.height} cm
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Weight :</TableCell>
                  <TableCell className="text-left">
                    {userData.weight} kg
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h1 className="font-bold mt-4">Home Address</h1>
            <Separator className="my-4" />
            <p>{userData.address.address}</p>
            <p>{userData.address.country}</p>
            <p>{userData.address.city}</p>
            <p>{userData.address.state}</p>
            <p>{userData.address.postalCode}</p>
            <p>{userData.address.stateCode}</p>
            <p>
              {userData.address.coordinates.lat}{' '}
              {userData.address.coordinates.lng}
            </p>
          </div>
        </div>
      </div>
    );
};