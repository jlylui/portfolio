import React, { useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Form from "../components/Form";
import GraphCard from "../components/GraphCard";

const Index = props => {
  console.log("rendering index");
  const [response, setResponse] = useState(null);

  const handleResponse = respData => {
    if (respData.httpRequestErrored) {
      console.log(respData.message);
    } else {
      setResponse(respData);
    }
  };

  return (
    <Layout>
      <div
        className="page-header header-filter"
        style={{ backgroundImage: `url("../static/img/header-01.jpg")` }}
      ></div>
      <div className="main main-raised">
        <div className="container">
          <div className="row">
            {/* ABOUT SECTION =========================================================*/}
            <div className="col-sm-4 text-center">
              <img
                src="../static/img/me.jpg"
                alt=""
                className="img-raised rounded-circle img-fluid profile-img"
              />
              <h2 className="profile-title title">Joycelyn Lui</h2>
              <p>joycelyn.lui@hotmail.com</p>
            </div>
            <div className="col-sm-8">
              {/* PRJECT SECTION =========================================================*/}
              <h3 id="projects" className="title">
                Projects
              </h3>
              <div className="section">
                <h4>Investment Project</h4>
                <Form onSubmit={handleResponse} />
                {response && response.data["Meta Data"] ? (
                  <GraphCard
                    timeSeriesData={response.data["Time Series (Daily)"]}
                    metaData={response.data["Meta Data"]}
                  />
                ) : null}
              </div>
              {/* TIMELINE SECTION =========================================================*/}
              <h3 id="timeline" className="title">
                Timeline
              </h3>
              <div className="section">
                <h4>Speakers</h4>
                {/* <ul>
              {props.speakerData.map(speaker => (
                <li key={speaker.id}>
                  {speaker.firstName} {speaker.lastName}
                </li>
              ))}
            </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  let promise = axios
    .get("http://localhost:4000/speakers")
    .then(response => {
      return {
        hasErrored: false,
        speakerData: response.data
      };
    })
    .catch(error => {
      return {
        hasErrored: true,
        message: error.message
      };
    });

  return promise;
};

export default Index;
