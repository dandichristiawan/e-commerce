import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
