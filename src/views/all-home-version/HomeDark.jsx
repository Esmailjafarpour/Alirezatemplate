import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import SwitchDark from "../../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  { icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
  document.querySelector("body").classList.remove("rtl");

  return (
    <div className="yellow">
      {/* <SwitchDark /> */}
      {/* End Switcher */}
      <Tabs>
        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
