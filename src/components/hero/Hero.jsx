import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/AlirezaJafari.jpg";
import heroImgMobile from "../../assets/img/hero/AlirezaJafari.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";


const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "سید علیرضا جعفری",
  heroDesignation: "مشاور و مدیر دیجیتال مارکتینگ",
  heroDescriptions: `مشاور و مدیر دیجیتال مارکتینگ (با رویکرد داده‌محور) هستم؛ به بیان دیگر برای مشکلات بازاریابی و افزایش فروش کسب‌و‌کار شما، راهکارهای دیجیتالی متمایز و اثربخش تدوین و اجرا می‌کنم.`,
  heroBtn: [
    {id : 1 , name: "رزومه" , href : "https://alirezajafari.com/resume/" }, 
    {id : 2 , name: "وبلاگ" , href : "https://alirezajafari.com/blog/" }, 
    {id : 3 , name: "در خواست مشاوره" , href : "https://alirezajafari.com/" }, 
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
              من {heroContent.heroTitleName} هستم
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <div className="home-details__buttons">
              {heroContent.heroBtn.map((item) => (
                <button className="button" onClick={() => toggleModalOne(item.href)} key={item.id}>
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
