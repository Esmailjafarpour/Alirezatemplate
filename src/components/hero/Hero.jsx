import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/AlirezaJafari.jpg";
import heroImgMobile from "../../assets/img/hero/AlirezaJafari.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";


const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Seyed Alireza Jafari",
  heroDesignation: "Performance Marketing Specialist",
  heroDescriptions: `I'm a Tunisian based Data-Driven Digital Marketing Manager (SaaS)`,
  heroBtn: [
    {id : 1 , name: "Resume" , right : 0 , href : "https://alirezajafari.com/resume/" }, 
    {id : 2 , name: "Weblog" , right : 20 , href : "https://alirezajafari.com/blog/" }, 
  ],
};


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne(href) {
    setIsOpen(!isOpen);
    window.open(`${href}`, "_blank", "noreferrer")
  }
  
  return (
    <>
      <div className=" home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
          }}
        ></div>
        <div className="col-12 col-lg-8 home-details text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <div 
            style={{display : "flex" , justifyContent : "space-between" ,flexDirection: "column", alignItems: "center"}}
            >
              {heroContent.heroBtn.map((item) => (
                <button className="button" onClick={() => toggleModalOne(item.href)} key={item.id} style={{right : `${item.right}%` ,width : "200px" ,marginBottom : "10px" }}>
                  <span className="button-text">{item.name}</span>
                  <span className="button-icon fa fa-arrow-right"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End home-details-container */}
    </>
  );
};

export default Hero;
