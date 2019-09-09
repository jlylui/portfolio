import React, { useState } from "react";
import axios from "axios";

import "../static/css/material-kit.css";
import "../static/css/style.css";
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
      <div className="page-header header-filter"></div>
      <div className="main">
        <div className="section section-basic text-center" id="asxSearch">
          <p>Hi!</p>
          <Form onSubmit={handleResponse} />
          {response && response.data["Meta Data"] ? (
            <GraphCard
              timeSeriesData={response.data["Time Series (Daily)"]}
              metaData={response.data["Meta Data"]}
            />
          ) : null}
        </div>

        <div className="section section-basic">
          <div className="container">
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
