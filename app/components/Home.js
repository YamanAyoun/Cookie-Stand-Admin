import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import Footer from '../components/Footer';
import Overview from './overview';

function Home() {
  const [cookieStands, setCookieStands] = useState([]);
  
  // Handle creation of new cookie stands
  const handleCreateCookieStand = (newCookieStand) => {
    setCookieStands([...cookieStands, newCookieStand]);
  };

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <CreateForm onCreate={handleCreateCookieStand} />
        <ReportTable hours={timeSlots} reports={cookieStands} />
      </main>
      <Footer reports={cookieStands} />
    </div>
  );
}

export default Home;
