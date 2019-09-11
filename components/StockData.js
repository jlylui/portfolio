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
      {response && response.data["Meta Data"] ? (
        <GraphCard
          timeSeriesData={response.data["Time Series (Daily)"]}
          metaData={response.data["Meta Data"]}
        />
      ) : null}
    </div>
  );
};

export default StockData;
