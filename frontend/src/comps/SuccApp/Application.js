import React, { useEffect, useState } from 'react'
import '../../styles/SuccApp/SuccAppStyling.css'
import NewtRd from "../../assets/SuccApp/NewtRd.png"
import NapierSt from "../../assets/MyMetro/4-23 Napier St Freemans 3.png"
import Halesowen from "../../assets/MyMetro/18 halesowen abe 2.png";
function Application({DetailsToDisplay}) {
  
  useEffect(() => {
  })
  return (
    <div>
      {
        DetailsToDisplay.length !== 0 ? DetailsToDisplay.map((elements,index) => {
          return (
            <div key={index}>
              <h1 id="SuccAppTittle">Successful Application</h1>
              <div id="SuccAppF">
                <div id="SuccAppBox">
                  <div id="SuccAppBoxInner">
                    <img src={elements.image} alt="NewtRdimage" />
                    <p>
                      Congratulations {elements.user_name},
                      <br />
                      Upon review, your application for {elements.address} has been successful. <br />
                      The property will be available for move in on the {elements.move_date}.
                      <br />
                      Your property manager, Holly, will be in contact in due
                      course regarding bond payment. Paperwork will be sent via
                      docusign, please keep an eye out in your emails. If not
                      received within 2 working days, please get in touch and
                      we’ll have that resent to you. <br />
                      Any queries, please don’t hesitate to get in touch.
                      <br />
                      All communications can be accessed through your MyMetro
                      account and emailed as well.
                    </p>
                  </div>
                </div>
              </div>
              <div id="SuccAppBelowButtons">
                <h2>MyMetro Dashboard</h2>
                <h3>Email Agent</h3>
              </div>
            </div>
          );
        }):<></>
      }
      
    </div>
  );
}

export default Application
