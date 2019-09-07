import "../node_modules/react-vis/dist/style.css";
import {
  FlexibleXYPlot,
  LineSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines
} from "react-vis";

const Graph = props => {
  const plotData = Object.keys(props.timeSeriesData)
    .reverse()
    .map(i => ({
      x: i,
      y: props.timeSeriesData[i]["4. close"]
    }))
    .filter(item => item.y > 0);
  // console.log(plotData);
  return (
    <div className="container">
      <div className="card card-nav-tabs">
        <div className="card-header-primary"></div>
        <div className="card-body text-center">
          <div style={{ height: "500px" }}>
            <FlexibleXYPlot xType="ordinal" margin={{ bottom: 100 }}>
              {/* <VerticalGridLines /> */}
              <HorizontalGridLines />
              <XAxis
                tickLabelAngle={-90}
                xDomain={plotData
                  .filter((_, i) => (i + 1) % 2 == 0)
                  .map(item => item.x)}
              />
              <YAxis />
              <LineSeries data={plotData} />
            </FlexibleXYPlot>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
