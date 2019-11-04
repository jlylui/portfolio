import React from "react";
import Layout from "../components/Layout";
import StockData from "../components/StockData";
const Projects = () => {
  return (
    <Layout className="content-page" hide={true} subtitle="PROJECTS">
      <div className="row">
        <div className="page-container">
          {/* PRJECT =========================================================*/}
          <div className="section">
            <div className="container">
              <h3 className="title" id="projects">
                Investment Web-App
              </h3>
              <div className="row">
                <div className="col-lg-6">
                  {/* Demo =========================================================*/}
                  <StockData />
                </div>
                <div className="col-lg-6">
                  {/* Details =========================================================*/}
                  <div className="section container">
                    <h4>Project Details</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
