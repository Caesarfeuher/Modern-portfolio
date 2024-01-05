import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/home-components'
import Layout from ' /components/global-components/Layout'
import React from 'react';

const Home = () => {
  return (
    <Layout>
      <HomePage/>
    </Layout>
  );
};

export default Home;
