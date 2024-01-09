import { overviewWidgetsData } from "../../data/OverviewWidgetData";
import CardWidget from "../CardWidget/CardWidget";
import Icon from "../Icon/Icon";
import "./Dashboard.css"

function Dashboard() {
  console.log(overviewWidgetsData);
  return (
    <section className="Dashboard">
      <div className="OverviewContainer">
        <h2>Overview</h2>
        <div className="OverviewMonth">
          <p>This Month</p>
          <div>
            <Icon name={"chevron-icon"} className="icon-color-gray" />
          </div>
        </div>
      </div>
      <div className="OverviewContainers">
        {overviewWidgetsData.map((data) => {
          return (<>
            <CardWidget {...data} />
          </>)
        })}
      </div>
    </section>
  );
}


export default Dashboard