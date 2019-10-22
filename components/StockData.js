import React, { useState } from "react";
import Search from "./Search";
import Link from "./Link";

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
            pathname: "/shares",
            query: {
              shareCode: "APX.AUS"
            }
          }}
          as={`shares/APX.AUS`}
        >
          <a className="btn btn-primary btn-raised inline-btn">APX</a>
        </Link>
      </div>
      <Search onSubmit={handleResponse} />
      {/* TODO: fix the issue if response data returned with array data but filter with region returns an empty array */}
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
                      pathname: "/shares",
                      query: {
                        shareCode: result["1. symbol"]
                      }
                    }}
                    as={`shares/${result["1. symbol"]}`}
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
