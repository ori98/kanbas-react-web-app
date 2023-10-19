import ModuleList from "../Modules/ModuleList";
import Status from "./Status";


function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9">
      <ModuleList />
          </div>
          <div className="col-3">
            <Status/>
            </div>
        </div>
    </div>
  );
}
export default Home;