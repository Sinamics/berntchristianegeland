/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Navbar from './navbar';

export const LayoutPublic: React.FC<any> = ({ children }: any) => {
  return (
    <>
      <div className='absolute w-full z-20'>
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
};

export const LayoutAnonymous: React.FC<Record<string, unknown>> = (props) => {
  return <div>{props.children}</div>;
};
