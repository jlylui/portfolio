import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";
import Modal from "./Modal";

const assetPrefix = process.env.ASSET_PREFIX;
const About = () => {
  const [contactModal, setContactModal] = useState(false);
  const handleContactModal = () => {
    setContactModal(!contactModal);
  };
  return (
    <div className="container" id="about">
      <div className="text-center">
        <div className="profile-about">
          <h2 className="title">About Me</h2>
          <h6
            style={{ color: "#9C27B0", fontWeight: "bold", fontSize: "13px" }}>
            Passion driven | Focused | Team Player
          </h6>
          {/* <p>
            <FontAwesomeIcon icon={["far", "envelope"]} />{" "}
            <a href="mailto:joycelyn.lui@hotmail.com">
              joycelyn.lui@hotmail.com
            </a>
          </p> */}
        </div>
      </div>
      <div className="container about">
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Hi there, I'm a software engineer based in Sydney, Australia.
        </p>
        <div className="section">
          <p>
            I've experiences in full-stack web development, CICD and automation.
            I love exploring new technologies, solving problems and challenges.
            I'm also intrigued by cutting-edge technology such as AI and
            bionics.
          </p>
        </div>
        <div className="section">
          <div className="row">
            <div className="col-1">
              <p className="text-center">
                <FontAwesomeIcon icon="rocket" size="3x" />
              </p>
            </div>
            <div className="col-11" style={{ alignSelf: "center" }}>
              <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                How I find my engineering passion?
              </p>
            </div>
          </div>
          <p>
            I found my passion for engineering during my senior years of high
            school. I was flipping through a job guide and came across
            "Aeronautical Engineering" (as you may have guessed I was going
            through it alphabetically). Soon after, I knew that as an engineer,
            I would be able to:
            <ul>
              <li>build something amazing from the ground up</li>
              <li>
                translate ideas and technology into products and services that
                improve quality of life
              </li>
              <li>
                make a difference in the world by finding solutions to complex
                world problems
              </li>
            </ul>
            During uni, I was fascinated by robotics particularly in the
            biomedical field. In programming courses, I loved being able to come
            up with solutions to complex problems and working in a team with
            other clever programmers. And so here I am today...
          </p>
          <blockquote style={{ fontStyle: "italic", fontWeight: "bold" }}>
            <p className="mb-0 text-center">
              working as a software engineer who aspire to work on projects
              which deliver life-changing solutions to make a difference in the
              world.
            </p>
          </blockquote>
        </div>
        <div className="section">
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="text-center card-header card-header-primary">
                  <div>
                    <FontAwesomeIcon
                      style={{
                        transform: "translate3d(0,-12%,0)"
                      }}
                      icon="cube"
                      size="4x"
                    />
                  </div>
                  <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                    What excites me about coding?
                  </p>
                </div>
                <div className="card-body">
                  <p>
                    I love learning new things and picking up new skills. With
                    coding, you'll never run out of things to learn (e.g. a new
                    language, framework etc). The learning never stops and
                    you'll always be challenged to find a better solution to
                    existing problems.
                  </p>
                  <p>
                    When I look around, I'm surrounded by software in my daily
                    life. To me, having the ability to develop applications that
                    solve many life problems excites me.
                  </p>
                  <p>
                    Whenever I come across cool products or services, I often go
                    on{" "}
                    <a href="https://stackshare.io/" target="_blank">
                      StackShare
                    </a>{" "}
                    to check out the different dev tools and tech stack used,
                    and think to myself which dev tool should I learn next and
                    how I can integrate it in my own projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="text-center card-header card-header-info">
                  <div>
                    <FontAwesomeIcon
                      style={{
                        transform: "translate3d(0,-12%,0)"
                      }}
                      icon="basketball-ball"
                      size="4x"
                    />
                  </div>
                  <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                    What do I do in my spare time?
                  </p>
                </div>

                <div className="card-body">
                  <p>
                    Although I do spend a lot of my spare time coding but I'm
                    also a very active person. When I'm not coding, you'll find
                    me
                  </p>
                  <ul>
                    <li>Playing basketball</li>
                    <li>Running</li>
                    <li>Indoor Rock Climbing</li>
                    <li>Hiking</li>
                    <li>Reading</li>
                  </ul>
                </div>
                <div id="form" className="container about">
                  <p
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "bold"
                    }}>
                    How to contact me?
                  </p>
                  <p>
                    You can email me or find me on different social media
                    channels. Also feel free to leave me a message{" "}
                    <a
                      className="btn btn-info btn-link"
                      style={{
                        padding: "0px",
                        marginTop: "0px",
                        marginBottom: "6px",
                        fontSize: "14px"
                      }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
