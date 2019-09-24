import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Form = props => {
  const [keywords, setKeywords] = useState("");
  const [region, setRegion] = useState("");
  const [inputFocused, setInputFocused] = useState("");
  const handleSubmit = async event => {
    const params = {
      function: "SYMBOL_SEARCH",
      keywords: keywords,
      apikey: "H8HG5KWNVPK38JDU"
    };
    event.preventDefault();
    const resp = await axios
      .get("https://www.alphavantage.co/query", { params })
      .then(response => {
        // console.log("Response: ", response);
        return {
          httpRequestErrored: false,
          status: response.status,
          statusText: response.statusText,
          data: response.data,
          inputRegion: region
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
    <div className="" id="asxSearch">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div
            className={`col-md-6 form-group bmd-form-group ${inputFocused} ${
              keywords !== "" ? "is-filled" : ""
            } `}
          >
            <label className="bmd-label-floating">Company/Code</label>
            <input
              type="text"
              className="form-control"
              id="keywords"
              value={keywords}
              onChange={event => setKeywords(event.target.value)}
              require="true"
              // placeholder="Telstra"
              onFocus={() => setInputFocused("is-focused")}
              onBlur={() => setInputFocused("")}
            />
          </div>

          <div
            className={`col form-group bmd-form-group + ${
              region !== "" ? "is-filled" : ""
            }
            `}
          >
            <label className="bmd-label-floating">
              Select Region (Optional)
            </label>
            <select
              className="form-control selectpicker"
              id=""
              onChange={event => setRegion(event.target.value)}
            >
              <option className="dropdown-item"></option>
              <option className="dropdown-item">Australia</option>
              <option className="dropdown-item">United States</option>
            </select>
          </div>

          <div className="col-auto text-left form-group bmd-form-group">
            <button className="btn btn-primary btn-raised btn-fab btn-round btn-sm">
              <span className="material-icons">
                <FontAwesomeIcon icon="search" />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
