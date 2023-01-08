import React from 'react'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import Application from '../comps/SuccApp/Application'
function SuccApp({ DetailsToDisplay }) {
  return (
    <div>
      <Navbar />
      <Application DetailsToDisplay={DetailsToDisplay} />
      <Footer />
    </div>
  );
}

export default SuccApp