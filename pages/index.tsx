import Section1 from '@components/Section-1';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Home: NextPage = () => {
  return (
    <main>
      <Section1 />
      {/* <WorkingSection /> */}
      {/* <TeamSection /> */}
      {/* <ContactSection /> */}
    </main>
  );
};

export default Home;
