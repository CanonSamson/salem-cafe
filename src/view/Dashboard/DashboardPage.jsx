import NarBar from "./dashboardcomponents/NavBar";
import {  Outlet } from "react-router-dom";

const DashboardPage = () => {
    return ( 
        <div>
            <NarBar />
            <Outlet />
        </div>

     );
}
 
export default DashboardPage;