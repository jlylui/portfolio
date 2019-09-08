import React, { useState } from "react";
import axios from "axios";

import Head from "next/head";
import "../static/css/material-kit.css";
import "../static/css/style.css";
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
        <Graph timeSeriesData={timeSeriesData} metaData={metaData} />
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
