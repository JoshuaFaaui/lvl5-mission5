import React, { useEffect, useState } from 'react'
import WelcomeStyling from "../../styles/MyMetro/Welcome/WelcomeStyling.css"
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMail } from 'react-icons/ai'
import { HiPhone } from 'react-icons/hi'
import { TbGridDots } from 'react-icons/tb'
import {Link} from "react-router-dom"
function Welcome({ setDetailsToDisplay }) {
  // ------------------------------------------
  const SendSuccAppData = () => {
    ArrOfApp.map((element) => {
      const PostReqOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: element.user_name,
          address: element.address,
          state: element.state,
          move_date: element.move_date,
          image: element.image,
        }),
      };
      fetch("http://localhost:3001/SendAppData", PostReqOptions)
        .then((tojs) => tojs.json())
        .then(() => {
          console.log("sent to datab");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  // ------------------------------------------

  const [ArrOfApp, SetArrOfApp] = useState([]);
  let ArrayOfApplications = [
    {
      user_name: "Mary",
      address: "4 23 Napier Street, Freemans Bay",
      state: "Application Successful",
      move_date: "6th January 2023",
      image: "/static/media/4-23 Napier St Freemans 3.d4c73233a8929cba8ce7.png",
    },
    {
      user_name: "Mary",
      address: "18 Halesowen Avenue, Sandringham",
      state: "Application is under review",
      move_date: "26st February 2023",
      image: "/static/media/18 halesowen abe 2.e96701a7bc7b2568d9b8.png",
    },
    {
      user_name: "Mary",
      address: "10 Newton Road, Auckland Central",
      state: "Application Successful",
      move_date: "21st January 2023",
      image: "/static/media/NewtRd.88c7e730e22abb0665f8.png",
    },
  ];

  const SendApplicationStates = () => {
    ArrayOfApplications.map((elements) => {
      const PostReqOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          d1: elements.user_name,
          d2: elements.address,
          d3: elements.state,
          d4: elements.move_date,
          d5: elements.image,
        }),
      };
      fetch(
        "http://localhost:3001/Welcome/Send/StatesForAppliedApplications",
        PostReqOptions
      )
        .then((tojs) => tojs.json())
        .then(() => {
          console.log("hi");
        })
        .catch((err) => {
          console.log(err);
        });
      fetch(
        `http://localhost:3001/Welcome/GET/StatesForAppliedApplications/username/${ArrayOfApplications[0].user_name}`
      )
        .then((tojson) => tojson.json())
        .then((data) => {
          SetArrOfApp(data);
        });
    });
  };
  const ResetAllOnPageLoad = () => {
    fetch("http://localhost:3001/deleter");
    fetch("http://localhost:3001/deleter2");
    fetch("http://localhost:3001/deleter3");
  };

  useEffect(() => {
    ResetAllOnPageLoad();
    SendApplicationStates();
    // sending data for the SuccApp page\/
    SendSuccAppData();
  }, []);

  return (
    <div>
      <div id="WelcomeTextFoundation">
        <h1>
          Hello, {ArrOfApp.length !== 0 ? ArrOfApp[0].user_name : ""} Welcome To
          MyMetro
        </h1>
      </div>
      <div id="UserApplicationsFoundation">
        <div id="UserApplicationsp1">
          <h2>Your applications</h2>
          {ArrOfApp.length !== 0 ? (
            ArrOfApp.map((element, index) => {
              return (
                <div key={index} className="Applications">
                  <h3>{element.address}</h3>
                  <h4>
                    {element.state !== "Application Successful" ? (
                      <TbGridDots className="text-red mr-1" />
                    ) : (
                      <>
                        <IoNotificationsOutline className="text-green" />
                        <TbGridDots className="text-green mr-1" />
                      </>
                    )}
                    {element.state === "Application Successful" ? (
                      <Link to="/SuccApp">
                        <button
                          onClick={() => {
                            fetch(
                              `http://localhost:3001/SuccApp/GetAppData/username/${element.user_name}/${element.address}`
                            )
                              .then((tojson) => tojson.json())
                              .then((results) => setDetailsToDisplay(results));
                          }}
                        >
                          {element.state}
                        </button>
                      </Link>
                    ) : (
                      <>{element.state}</>
                    )}
                  </h4>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div id="UserApplicationsp2">
          <ul>
            <li>
              <IoNotificationsOutline id="WelcIcon1" />
              New listing notification
            </li>
            <li>
              <AiOutlineMail id="WelcIcon2" />
              Communications
            </li>
            <li>
              <HiPhone id="WelcIcon3" />
              09 391 4642
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Welcome