import ModuleList from "../Modules/ModuleList";
import Status from "./Status";
import "./index.css";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap-custom">
        <div className="col-12 col-lg-9">
          <ModuleList />
        </div>
        <div className="col-lg-3 d-none d-lg-block status-min-width">
          <Status />
        </div>
      </div>
    </div>
  );
}
export default Home;