import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class About extends Component {
  render() {
    return (
      <div className="col-lg-4 text-center">
        <img
          src="/static/img/me.jpg"
          alt=""
          className="img-raised rounded-circle img-fluid profile-img"
        />
        <div className="profile-name">
          <h2 className="profile-title title">Joycelyn Lui</h2>
          <h6>Passion driven | Focused | Team Player</h6>
          <p>
            <FontAwesomeIcon icon={["far", "envelope"]} />{" "}
            joycelyn.lui@hotmail.com
          </p>
        </div>
      </div>
    );
  }
}
