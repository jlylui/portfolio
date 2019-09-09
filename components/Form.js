import React, { useState } from "react";
import axios from "axios";

const Form = props => {
  const [code, setCode] = useState("");
  const handleSubmit = async event => {
    const params = {
      function: "TIME_SERIES_DAILY",
      symbol: code,
      apikey: "H8HG5KWNVPK38JDU"
    };
    event.preventDefault();
    const resp = await axios
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
    props.onSubmit(resp);
  };
  return (
    <div className="container text-center">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-sm-4">
            <div className="form-group bmd-form-group">
              <input
                type="text"
                className="form-control"
                id="shareCode"
                value={code}
                onChange={event => setCode(event.target.value)}
                require="true"
                placeholder="Share Code"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-4 text-left">
            <div className="form-group bmd-form-group">
              <button className="btn btn-primary btn-raised inline-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
