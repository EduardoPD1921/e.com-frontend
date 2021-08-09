import React, { useState } from 'react';

import Header from '../../components/Header';
import ResponsiveHeader from '../../components/Header/ResponsiveHeader';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <ResponsiveHeader isOpen={mobileMenuOpen} />
    </>
  );
};

export default Home;