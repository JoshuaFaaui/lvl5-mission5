import React from 'react'
import FooterLogo from "../assets/Footer/FooterLogo.png"
import "../styles/Footer/FooterStyling.css"
import MetroLogo from "../assets/Footer/metro logo.png"
import Group128 from "../assets/Footer/Group 128.png"
function Footer() {
  return (
    <div>
      <div id="FooterPart1F">
        <h1>Awards</h1>
        <img src={FooterLogo} alt="FooterIMG" />
      </div>
      <div id="FooterPart2F">
        <img src={MetroLogo} alt="MetroLogo" id="MetroLogo" />
        <div id="FootPara1">
          <p>
            Level 33, ANZ Centre
            <br />
            23-29 Albert St
            <br />
            Auckland 1010
            <br />
            New Zealand
            <br />
            <br />
            Ph: 09 391 4642 <br />
            Mb: +64 21 642 119
            <br />
            info@metronz.co.nz
          </p>
        </div>
        <div id="FootPara2">
          <p>
            About Us
            <br />
            Careers
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
            <br />
            Disputes Process
          </p>
        </div>
        <div id="SubToNewsletter">
          <h3>Subscribe to our Newsletter</h3>
          <img src={Group128} alt="Group 128" />
        </div>
      </div>
      <div id='EndofFooterTitle'>
        <h4>© 2022 Metro NZ Property Management</h4>
      </div>
    </div>
  );
}

export default Footer