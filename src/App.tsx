import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
function App() {
  return (
    <>
      <div className="m-2 p-2">
        <Header />
        <div className="flex w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default App;
