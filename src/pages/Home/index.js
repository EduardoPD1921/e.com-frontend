import React, { useState } from 'react';

import Header from '../../components/Header';
import ResponsiveHeader from '../../components/Header/ResponsiveHeader';
import Banner from '../../components/Banner';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <ResponsiveHeader isOpen={mobileMenuOpen} />

      <Banner />
    </>
  );
};

export default Home;