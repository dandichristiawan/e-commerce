import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { LoginApi } from '@/features/login/libs/api';
import { useNavigate } from 'react-router-dom';
import { signInRequest } from '@/features/login/libs/definitions';
import TopBarProgress from 'react-topbar-progress-indicator';

export const Login = () => {
  const navTo = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loginValue, setLoginValue] = React.useState<signInRequest>({
    username: '',
    password: '',
    expiresInMins: 60,
  });

  const handleLoginValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClicked = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await LoginApi(loginValue);
      if (res) {
        navTo('/home');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <TopBarProgress />}
      <main className="min-h-dvh flex justify-center items-center">
        <div className="grid max-w-sm w-full rounded-md shadow-2xl p-4 gap-1.5">
          <form onSubmit={onClicked}>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              value={loginValue.username}
              onChange={handleLoginValueChange}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              value={loginValue.password}
              onChange={handleLoginValueChange}
            />
            <Button type="submit" className="mt-4 w-full rounded-xl shadow-md">
              Login
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};
