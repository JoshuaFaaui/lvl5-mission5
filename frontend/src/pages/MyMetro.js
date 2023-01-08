import React from 'react'
import Navbar from '../comps/Navbar'
import Welcome from '../comps/MyMetro/Welcome'
import PropWatch from '../comps/MyMetro/PropWatch'
import AppDetails from '../comps/MyMetro/AppDetails'
import Footer from '../comps/Footer'
function MyMetro({ setDetailsToDisplay }) {
  return (
    <div>
      <Navbar />
      <Welcome setDetailsToDisplay={setDetailsToDisplay} />
      <PropWatch />
      <AppDetails />
      <Footer />
    </div>
  );
}

export default MyMetro