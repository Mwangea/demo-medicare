import React from 'react'
import Header from '../Components/Header/Header';
import Routers from '../routes/Routers';
import Footer from '../Components/Footer/Footer';


const Layout = () => {
  return ( <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
}

export default Layout;