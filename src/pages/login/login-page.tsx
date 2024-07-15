import React from 'react';
import { Login } from '@/features/login';
import { MainLayout } from '@/layouts/main-layouts';

export const LoginPage = () => {
  return (
    <>
      <MainLayout>
        <Login />
      </MainLayout>
    </>
  );
};
