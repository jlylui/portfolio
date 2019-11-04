import React, { useState, useEffect } from "react";
import axios from "axios";
import GraphCard from "../components/GraphCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";

const GetStockDataUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.RESTURL_STOCKDATA_PROD;
  } else {
    return process.env.RESTURL_STOCKDATA_DEV;
  }
};

const Shares = props => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(props.isLoading);
  });
  return (
    <Layout className="content-page" hide={true} subtitle="SHARE">
      <div className="row">
        <div className="page-container">
          <div className="container">
            <h3 className="title"></h3>
            <div className="section">
              {isLoading ? (
                <div>
                  <p className="text-center text-info">
                    <FontAwesomeIcon icon={"spinner"} spin size="2x" />
                  </p>
                </div>
              ) : props.httpRequestErrored ? (
                <div>
                  <p>HTTP Request Error</p>
                </div>
              ) : (
                <>
                  <h4>{props.timeData["Meta Data"]["2. Symbol"]}</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th data-field="price">Price</th>
                        <td>
                          {props.quoteRequestData["Global Quote"]["05. price"]}
                        </td>
                      </tr>
                      <tr>
                        <th data-field="change">Change</th>
                        <td
                          className={
                            props.quoteRequestData["Global Quote"][
                              "09. change"
                            ] > 0
                              ? "text-success"
                              : "text-danger"
                          }>
                          {props.quoteRequestData["Global Quote"]["09. change"]}{" "}
                          (
                          {
                            props.quoteRequestData["Global Quote"][
                              "10. change percent"
                            ]
                          }
                          )
                        </td>
                      </tr>
                      <tr>
                        <th data-field="previous-close">Previous Close</th>
                        <td>
                          {
                            props.quoteRequestData["Global Quote"][
                              "08. previous close"
                            ]
                          }
                        </td>
                      </tr>
                      <tr>
                        <th data-field="volume">Volume</th>
                        <td>
                          {props.quoteRequestData["Global Quote"]["06. volume"]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <GraphCard
                    timeSeriesData={props.timeData["Time Series (Daily)"]}
                    metaData={props.timeData["Meta Data"]}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Shares.getInitialProps = async ({ query }) => {
  console.log(query.shareCode);
  console.log(query.shareCode.replace(".html", ""));
  const commonParams = {
    symbol: query.shareCode,
    apikey: "H8HG5KWNVPK38JDU"
  };
  let res = { isLoading: true };
  let promise = axios
    .get(GetStockDataUrl(), {
      params: {
        function: "GLOBAL_QUOTE",
        ...commonParams
      }
    })
    .then(response => {
      res = {
        isLoading: false,
        quoteRequestErrored: false,
        quoteRequestStatus: response.status,
        quoteRequestStatusText: response.statusText,
        quoteRequestData: response.data
      };
      return axios.get("https://www.alphavantage.co/query", {
        params: {
          function: "TIME_SERIES_DAILY",
          ...commonParams
        }
      });
    })
    .then(response => {
      res = {
        ...res,
        timeRequestErrored: false,
        timeRequestStatus: response.status,
        timeRequestStatusText: response.statusText,
        timeData: response.data
      };
      return res;
    })
    .catch(error => {
      return {
        httpRequestErrored: true,
        message: error.message
      };
    });

  return promise;
};

export default Shares;
