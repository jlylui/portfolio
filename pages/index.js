import React from "react";

import About from "../components/About";
import TextPopoverBox from "../components/TextPopoverBox";
import Layout from "../components/Layout";

// Div Format for single column page
{
  /* <div className="row">
  <div className="page-container">
    <div className="container ">
      <h3 className="title">Share</h3>
      <div className="section">
        <h4></h4>
        <content/>
      </div>
    </div>
  </div>
</div>       */
}

const timeline = [
  {
    where: "Telstra",
    what: "Software Engineer",
    when: "Feb 2018 – Present",
    icon: "laptop-code"
  },
  {
    where: "Telstra",
    what: "Networks Technology Graduate",
    when: "Jan 2017 – Jan 2018",
    icon: "laptop-code"
  },
  {
    where: "ResMed",
    what: "Verification & Validation Engineer (Intern)",
    when: "Nov 2015 - Dec 2016",
    icon: "laptop-medical"
  },
  {
    where: "Bionic Vision Australia",
    what: "UNSW Team Research Assistant",
    when: "Mar 2015 - Oct 2015",
    icon: "microscope"
  },
  {
    where: "University of New South Wales",
    what: "Bachelor of Mechatronic & Master of Biomedical Engineering",
    when: "2012 - 2016",
    icon: "graduation-cap"
  }
];

const Index = () => {
  console.log("rendering index");
  console.log(process.env.ASSET_PREFIX);
  return (
    <Layout className="index-page" subtitle="Software Engineer">
      <div className="home-page-container">
        <div className="row">
          <About />
        </div>
        <div className="row">
          <div className="container">
            {/* TIMELINE SECTION =========================================================*/}
            <div id="timeline" className="container">
              <h3 className="title">Timeline</h3>
              <div className="section">
                <h4>Highlights</h4>
                <TextPopoverBox textArray={timeline} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="container single-column">
              {/* SINGLE COLUMN SECTION =========================================================*/}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
