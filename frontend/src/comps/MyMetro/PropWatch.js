import React from 'react'
import {Link} from 'react-router-dom'
import "../../styles/MyMetro/PropWatch/PropWatchStyling.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NewWindsor from '../../assets/MyMetro/54 new windsor 4.png'
import Halesowen from "../../assets/MyMetro/18 halesowen abe 2.png";
import Western from "../../assets/MyMetro/11 Western Springs Road 3.png"
import Kitchener from "../../assets/MyMetro/23 kitchener 2.png"
import StMarys from "../../assets/MyMetro/29 st marys 3.png"
import FourthAve from "../../assets/MyMetro/54 fourth 2.png"
import Msd from "../../assets/MyMetro/303-36 msd 2.png"
import NapierSt from "../../assets/MyMetro/4-23 Napier St Freemans 3.png"
import SchoolRoad from "../../assets/MyMetro/68 School 2.png"
function PropWatch() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  const CarouselArray = [
    {
      Src: NewWindsor,
      Info: "54 New Windsor Road,",
      Info2: "New Windsor",
    },
    {
      Src: Halesowen,
      Info: "18 Halesowen Avenue,",
      Info2: "Sandringham",
    },
    {
      Src: Western,
      Info: "10-11 Western Springs Road,",
      Info2: "Western Springs",
    },
    {
      Src: Kitchener,
      Info: "23 Kitchener Road,",
      Info2: "Sandringham",
    },
    {
      Src: StMarys,
      Info: "29 St Marys Road,",
      Info2: "Herne Bay",
    },
    {
      Src: FourthAve,
      Info: "54 Fourth Avenue,",
      Info2: "Kingsland",
    },
    {
      Src: Msd,
      Info: "303/3 Morningside Drive,",
      Info2: "Morningside",
    },
    {
      Src: NapierSt,
      Info: "4/23 Napier Street,",
      Info2: "Freemans Bay",
    },
    {
      Src: SchoolRoad,
      Info: "68 School Road,",
      Info2: "Kingsland",
    },
  ];
  return (
    <div>
      <div id="PropWatchHeadingF">
        <h1>Property Watch-list</h1>
      </div>
      <div id="PropWatchSliderF">
        <div id="PropWatchSliderp1">
          <Slider {...settings}>
            {CarouselArray.map((element, index) => {
              return (
                <div key={index}>
                  <img src={element.Src} alt={"image" + index} className='ImageInSlide'/>
                  <div className='ImageSlideInfo'>
                    <h2>{element.Info}</h2>
                    <h3>{element.Info2}</h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <h1 id='SearchRentalsButton'><Link>Search Rentals</Link></h1>
    </div>
  );
}

export default PropWatch