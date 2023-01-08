import React, { useEffect, useState } from 'react'
import "../../styles/MyMetro/AppDetails/AppDetailStyling.css"
function AppDetails() {
    const [ApplicationDetails, setApplicationDetails] = useState([])
    const AppDetailArray = [{
      personal_full_legal_name: "Mary Big Banker",
      personal_dob: "3/9/1991",
      personal_mobile: parseInt("02102604559") ,
      personal_phone: parseInt("098189876"),
      personal_referee_name: "Dayna G",
      personal_referee_phone_email: "",
      personal_referee_income_per_week: "",
      current_employer_referee_name: "Vanesa Y",
      current_employer_referee_phone_email: "027 867 654",
      current_employer_referee_occupation: "Investment Banker",
      landlord_property_manager_name: "Glen G",
      landlord_property_manager_time_at_address: "14 Months",
      landlord_property_manager_reason_for_leaving: "Closer to work",
      landlord_property_manager_phone_email: "glen@gmail.com",
      personal_email: "mary@money.com",
      personal_relationship: "",
      personal_occupation: "",
    }];

    const SendAppDetails = () => {
      AppDetailArray.map((elements) => {
        const PostReqOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            q2: elements.personal_full_legal_name,
            q3: elements.personal_dob,
            q4: elements.personal_mobile,
            q5: elements.personal_phone,
            q6: elements.personal_referee_name,
            q7: elements.personal_referee_phone_email,
            q8: elements.personal_referee_income_per_week,
            q9: elements.current_employer_referee_name,
            q10: elements.current_employer_referee_phone_email,
            q11: elements.current_employer_referee_occupation,
            q12: elements.landlord_property_manager_name,
            q13: elements.landlord_property_manager_time_at_address,
            q14: elements.landlord_property_manager_reason_for_leaving,
            q15: elements.landlord_property_manager_phone_email,
            q16: elements.personal_email,
            q17: elements.personal_relationship,
            q18: elements.personal_occupation,
          }),
        };
        fetch(
          "http://localhost:3001/AppDetails/SendData",
          PostReqOptions
        )
          .then((tojs) => tojs.json())
          .then(() => {
            console.log("details done");
          })
          .catch((err) => {
            console.log(err);
          });
        fetch("http://localhost:3001/AppDetails/GetData")
          .then((tojson) => tojson.json())
          .then((data) => {
            console.log(data)
            setApplicationDetails(data);
          });
      });
    };

    useEffect(() => {
        SendAppDetails()
    },[])
  return (
    <div>
      {
        ApplicationDetails.length!==0?ApplicationDetails.map((elements,index)=>{
            return (
              <div key={index}>
                <h1 id="AppDetailsHeader">Your application details:</h1>
                <div id="AppDetailsF">
                  <div id="AppDetailsp1">
                    <div className="NormalInputBox">
                      <div id="AppDetailspan1P1">Full legal name</div>
                      <input
                        placeholder={elements.personal_full_legal_name}
                        readOnly
                        className="AppDetailInputs"
                      />
                    </div>
                    <div id="DOB">
                      <div id="AppDetailspan2P1">DOB</div>
                      <input
                        placeholder={elements.personal_dob}
                        readOnly
                        className="AppDetailInputs"
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="Mobilep1">
                        <div id="AppDetailspan3P1">Mobile</div>
                        <input
                          placeholder={elements.personal_mobile}
                          readOnly
                          className="AppDetailInputs"
                        />
                      </div>
                      <div id="Phonep1">
                        <div id="AppDetailspan4P1">Phone</div>
                        <input
                          placeholder={elements.personal_phone}
                          readOnly
                          className="AppDetailInputs"
                        />
                      </div>
                    </div>
                    <h2>Contacts & Referees Section</h2>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan5P1">Personal referee name</div>
                      <input
                        placeholder={elements.personal_referee_name}
                        readOnly
                        className="AppDetailInputs"
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan6P1">Phone/Email</div>
                      <input
                        readOnly
                        className="AppDetailInputs"
                        placeholder={elements.personal_referee_phone_email}
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan7P1">Income Per Week</div>
                      <input
                        readOnly
                        id="IncPerWeekInp"
                        placeholder={elements.personal_referee_income_per_week}
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan8P1">
                        Current employer referee name
                      </div>
                      <input
                        readOnly
                        placeholder={elements.current_employer_referee_name}
                        className="AppDetailInputs"
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan9P1">Phone/Email</div>
                      <input
                        readOnly
                        placeholder={
                          elements.current_employer_referee_phone_email
                        }
                        className="AppDetailInputs"
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan10P1">Occupation</div>
                      <input
                        readOnly
                        placeholder={
                          elements.current_employer_referee_occupation
                        }
                        className="AppDetailInputs"
                      />
                    </div>
                    <br />
                    <div className="NormalInputBox">
                      <div id="AppDetailspan11P1">
                        Landlord/Property manager name
                      </div>
                      <input
                        readOnly
                        placeholder={elements.landlord_property_manager_name}
                        className="AppDetailInputs"
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan12P1">Time at address</div>
                      <input
                        readOnly
                        placeholder={
                          elements.landlord_property_manager_time_at_address
                        }
                        className="AppDetailInputs"
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan13P1">Reason for leaving</div>
                      <input
                        readOnly
                        placeholder={
                          elements.landlord_property_manager_reason_for_leaving
                        }
                        className="AppDetailInputs"
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan14P1">Phone/Email</div>
                      <input
                        readOnly
                        placeholder={
                          elements.landlord_property_manager_phone_email
                        }
                        className="AppDetailInputs"
                      />
                    </div>
                  </div>
                  <div id="AppDetailsp2">
                    <div className="NormalInputBox">
                      <div id="AppDetailspan1P2">Email</div>
                      <input
                        readOnly
                        placeholder={elements.personal_email}
                        className="AppDetailInputs"
                      />
                    </div>
                    <div className="NormalInputBox" id="LastInpBoxes">
                      <div id="AppDetailspan1P2">Relationship</div>
                      <input
                        readOnly
                        className="AppDetailInputs"
                        placeholder={elements.personal_relationship}
                      />
                    </div>
                    <div className="NormalInputBox">
                      <div id="AppDetailspan1P2">Occupation</div>
                      <input
                        readOnly
                        placeholder={elements.personal_occupation}
                        className="AppDetailInputs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
        }):<></>
      }
    </div>
  );
}

export default AppDetails