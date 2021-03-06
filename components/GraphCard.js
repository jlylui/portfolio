import "../node_modules/react-vis/dist/style.css";
import window from "global";

import React, { useState, useEffect } from "react";
import {
  Crosshair,
  FlexibleXYPlot,
  LineSeries,
  XAxis,
  YAxis,
  HorizontalGridLines
} from "react-vis";

const GraphCard = props => {
  const [smMdWindow, setSmMdWindow] = useState(false);
  const [point, setPoint] = useState([]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1024) {
        setSmMdWindow(true);
      } else {
        setSmMdWindow(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return function cleanup() {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const plotData = Object.keys(props.timeSeriesData)
    .reverse()
    .map(i => ({
      x: i,
      y: props.timeSeriesData[i]["4. close"]
    }))
    .filter(item => item.y > 0);

  let xlabel = plotData
    .filter(
      (_, i) =>
        (i + 1) % (smMdWindow || window.innerWidth < 1024 ? 45 : 15) == 0
    )
    .map(item => item.x);

  return (
    <div className="text-center">
      {/* <h4 style={{ paddingBottom: "0" }}>{props.metaData["2. Symbol"]}</h4> */}
      <div className="card card-plot">
        <div className="card-header-dark">
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active show">DAILY</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-chart text-center">
          <FlexibleXYPlot
            onMouseLeave={() => setPoint([])}
            xType="ordinal"
            margin={{ top: 15, bottom: 50 }}
          >
            <XAxis
              // tickLabelAngle={smMdWindow ? -90 : 0}
              tickValues={xlabel}
            />
            <HorizontalGridLines />
            <YAxis tickPadding={-30} />
            <LineSeries
              data={plotData}
              // style={{ strokeWidth: 3 }} //stroke: "violet"
              onNearestX={v => {
                setPoint([v]);
              }}
            />
            <Crosshair values={point}>
              {point[0] == null ? (
                <div></div>
              ) : (
                <div className="rv-crosshair__inner__content">
                  {point[0].x}
                  <br />
                  open: {props.timeSeriesData[point[0].x]["1. open"]}
                  <br />
                  high: {props.timeSeriesData[point[0].x]["2. high"]}
                  <br />
                  low: {props.timeSeriesData[point[0].x]["3. low"]}
                  <br />
                  close: {point[0].y}
                  <br />
                  volume: {props.timeSeriesData[point[0].x]["5. volume"]}
                </div>
              )}
            </Crosshair>
          </FlexibleXYPlot>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
