import React, { useState } from 'react';
//@ts-ignore
import LeadText from '@material-tailwind/react/LeadText';

export default function Section1() {
  const [register, setRegister] = useState(false);

  return (
    <>
      <div className='relative pt-16 pb-32 flex content-center justify-center h-screen'>
        <div className='bg-landing-background bg-cover bg-center absolute top-0 w-full h-full' />
        <div className='container z-10 flex items-start'>
          <p className='text-5xl text-white font-light'>Bernt Christian Egeland</p>
        </div>
      </div>
    </>
  );
}
