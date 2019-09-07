import React, { useState } from "react";
import axios from "axios";

import Head from "next/head";
import "../static/css/material-kit.css";
import "../static/css/bootstrap.css";
import "../static/css/fresh-bootstrap-table.css";
import Graph from "../components/Graph";

const Index = props => {
  const metaData = props.data["Meta Data"];
  const timeSeriesData = props.data["Time Series (Daily)"];
  return (
    <div>
      <Head>
        <title>Joycelyn Lui</title>
      </Head>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand">Joycelyn Lui</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="page-header header-filter"></div>
      <div className="main">
        <div className="section section-basic text-center">
          <p>Hi!</p>
        </div>
        <div className="container text-center">
          <div className="col-md-offset-2">
            <div
              className="fresh-table toolbar-color-azure"
              style={{ display: "block" }}
            >
              <div className="boostrape-table">
                <div className="fixed-table-toolbar">
                  <h6>{metaData["2. Symbol"]}</h6>
                </div>
                <div className="fixed-table-container">
                  <div className="fixed-table-body">
                    <table className="table table-hover table-striped">
                      <thead>
                        <tr>
                          <th className="text-center">Date</th>
                          <th className="text-center">Close Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(timeSeriesData).map((i, index) => (
                          <tr key={index}>
                            <td>{i}</td>
                            <td>{timeSeriesData[i]["4. close"]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Graph timeSeriesData={timeSeriesData} />
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  const params = {
    function: "TIME_SERIES_DAILY",
    symbol: "ASX:BVS",
    apikey: "H8HG5KWNVPK38JDU"
  };

  var promise = axios
    .get("https://www.alphavantage.co/query", { params })
    // .get("http://localhost:4000/speakers")
    .then(response => {
      return {
        hasErrored: false,
        data: response.data
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
