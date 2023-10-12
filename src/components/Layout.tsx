import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-primary flex flex-col items-center">
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
