import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";
import Modal from "./Modal";

const socialMedia = [
  {
    icon: ["fab", "github"],
    link: "https://www.github.com/jlylui"
  },
  {
    icon: ["fab", "linkedin"],
    link: "https://www.linkedin.com/in/joycelyn-lui-44302585"
  },
  {
    icon: ["fab", "pinterest"],
    link: "https://www.pinterest.co.uk/heyjoycelyn/"
  }
];
const assetPrefix = process.env.ASSET_PREFIX;
const About = () => {
  const [contactModal, setContactModal] = useState(false);
  const handleContactModal = () => {
    setContactModal(!contactModal);
  };
  return (
    <div className="col-lg-4 text-center" id="about">
      <img
        src={`${assetPrefix}/static/img/me.jpg`}
        alt=""
        className="img-raised rounded-circle img-fluid profile-img"
      />
      <div className="profile-name">
        <h2 className="profile-title title">Joycelyn Lui</h2>
        <h6>Passion driven | Focused | Team Player</h6>
        <p>
          <FontAwesomeIcon icon={["far", "envelope"]} />{" "}
          <a href="mailto:joycelyn.lui@hotmail.com">joycelyn.lui@hotmail.com</a>
        </p>
      </div>
      <div className="row justify-content-center">
        <p>
          {socialMedia.map((media, index) => (
            <a href={media.link} target="_blank" key={index}>
              <button className="btn btn-social btn-link">
                <FontAwesomeIcon icon={media.icon} size="2x" />
              </button>
            </a>
          ))}
        </p>
      </div>
      <div className="container about">
        <div className="section">
          <p style={{ fontWeight: "bold" }}>Hi, I'm Joycelyn.</p>
          <blockquote className="blockquote">
            <p className="mb-0">
              Aspire to work on projects which deliver life-changing solutions
              to leave a legacy behind.
            </p>
          </blockquote>
          <p>
            Software engineer with experience in full-stack web development,
            CICD and automation. I love exploring new technologies, solving
            problems and challenges. I'm also intrigued by cutting-edge
            technology such as AI and bionics.
          </p>
        </div>
        <div className="section">
          <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            What do I do in my spare time?
          </p>
          <ul>
            <li>Coding</li>
            <li>Basketball</li>
            <li>Running</li>
            <li>Indoor Rock Climbing</li>
            <li>Hiking</li>
          </ul>
        </div>
      </div>
      <div id="form" className="container about">
        <p style={{ fontWeight: "bold" }}>
          Feel free to leave me a message{" "}
          <a
            className="btn btn-primary btn-link"
            style={{ padding: "0px", margin: "0px" }}
            onClick={handleContactModal}>
            here
          </a>
        </p>
        <div className="section">
          <Modal
            attrs={{
              show: contactModal,
              id: "email-form",
              title: "Write me a message",
              handler: handleContactModal
            }}>
            <Form />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default About;
