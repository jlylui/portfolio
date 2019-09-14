import React, { useState } from "react";
import Form from "./Form";
import GraphCard from "./GraphCard";
import Link from "next/link";

const StockData = () => {
  const [response, setResponse] = useState(null);

  const handleResponse = respData => {
    if (respData.httpRequestErrored) {
      console.log(respData.message);
    } else {
      setResponse(respData);
    }
  };

  return (
    <div className="section">
      <h4>Investment Project</h4>
      <div style={{ padding: "10px 0" }}>
        <Link
          href={{
            pathname: "/share",
            query: {
              shareCode: "APX.AUS"
            }
          }}
          as={`share/APX`}
        >
          <a className="btn btn-primary btn-raised inline-btn">APX</a>
        </Link>
      </div>
      <Form onSubmit={handleResponse} />
      {response ? (
        response.data["bestMatches"] &&
        response.data["bestMatches"].length > 0 ? (
          <ul>
            {response.data["bestMatches"]
              .filter(match =>
                response.inputRegion !== ""
                  ? match["4. region"] === response.inputRegion
                  : match
              )
              .map((result, index) => (
                <li key={index}>
                  <Link
                    href={{
                      pathname: "/share",
                      query: {
                        shareCode: result["1. symbol"]
                      }
                    }}
                    as={`share/${result["1. symbol"]}`}
                  >
                    <a>
                      {result["1. symbol"]} ({result["2. name"]}{" "}
                      {response.inputRegion !== "" ? "" : result["4. region"]})
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        ) : (
          <p>No match found</p>
        )
      ) : null}
    </div>
  );
};

export default StockData;
