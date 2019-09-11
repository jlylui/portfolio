import React from "react";
import axios from "axios";
import GraphCard from "../components/GraphCard";

const Share = props => {
  const shareSymbol = props.data["Meta Data"]["Symbol"];

  return (
    <div className="row">
      <div className="container">
        <h3 className="title">Share</h3>
        <div className="section">
          <h4>{shareSymbol}</h4>
          <GraphCard
            timeSeriesData={props.data["Time Series (Daily)"]}
            metaData={props.data["Meta Data"]}
          />
        </div>
      </div>
    </div>
  );
};

Share.getInitialProps = async ({ query }) => {
  const params = {
    function: "TIME_SERIES_DAILY",
    symbol: query.shareCode,
    apikey: "H8HG5KWNVPK38JDU"
  };

  let promise = axios
    .get("https://www.alphavantage.co/query", { params })
    .then(response => {
      console.log("Response: ", response);
      return {
        httpRequestErrored: false,
        status: response.status,
        statusText: response.statusText,
        data: response.data
      };
    })
    .catch(error => {
      return {
        httpRequestErrored: true,
        message: error.message
      };
    });

  return promise;
};

export default Share;
