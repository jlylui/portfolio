import React from "react";

import About from "../components/About";
import StockData from "../components/StockData";
import Form from "../components/Form";

// Div Format for single column page
{
  /* <div className="row">
  <div className="page-container">
    <div className="container ">
      <h3 className="title">Share</h3>
      <div className="section">
        <h4></h4>
        <content/>
      </div>
    </div>
  </div>
</div>       */
}

const Index = props => {
  console.log("rendering index");

  return (
    <div className="row">
      <About />
      <div className="col-lg-8">
        <div id="projects" className="container">
          {/* PRJECT SECTION =========================================================*/}
          <h3 className="title">Projects</h3>
          <StockData />
        </div>
        {/* TIMELINE SECTION =========================================================*/}
        <div id="timeline" className="container">
          <h3 className="title">Timeline</h3>
          <div className="section">
            <h4>Highlights</h4>
            <p>
              Faucibus ornare suspendisse sed nisi lacus sed. Iaculis eu non
              diam phasellus vestibulum lorem. At auctor urna nunc id. Ultrices
              in iaculis nunc sed augue lacus. Ut enim blandit volutpat maecenas
              volutpat blandit aliquam. At ultrices mi tempus imperdiet nulla.
              Eu augue ut lectus arcu bibendum at. Condimentum lacinia quis vel
              eros donec ac odio tempor orci. Vestibulum mattis ullamcorper
              velit sed ullamcorper. Dis parturient montes nascetur ridiculus
              mus mauris vitae ultricies.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              tortor id aliquet lectus proin nibh nisl. Bibendum arcu vitae
              elementum curabitur. Nulla facilisi morbi tempus iaculis urna id
              volutpat lacus. Volutpat diam ut venenatis tellus in metus.
              Euismod elementum nisi quis eleifend quam. Cursus metus aliquam
              eleifend mi in nulla posuere sollicitudin. Amet dictum sit amet
              justo donec enim diam vulputate ut. Egestas maecenas pharetra
              convallis posuere morbi leo. Mollis nunc sed id semper risus in
              hendrerit. Quis risus sed vulputate odio ut enim. Velit laoreet id
              donec ultrices. Interdum varius sit amet mattis vulputate. Netus
              et malesuada fames ac turpis egestas maecenas. Pellentesque eu
              tincidunt tortor aliquam nulla. Nibh tellus molestie nunc non
              blandit. Risus in hendrerit gravida rutrum quisque non tellus orci
              ac. Ornare aenean euismod elementum nisi quis eleifend quam
              adipiscing vitae. Sit amet facilisis magna etiam tempor orci eu
              lobortis elementum. Viverra mauris in aliquam sem.
            </p>
          </div>
        </div>
        <div id="form" className="container">
          {/* FORM SECTION =========================================================*/}
          <h3 className="title">Contact Form</h3>
          <div className="section">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
