import Footer from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
        <div className=' xl:max-w-7xl lg:max-w-5xl max-w-xl mx-auto'>
          {children}
        </div>
      <Footer />
    </>
  );
};
