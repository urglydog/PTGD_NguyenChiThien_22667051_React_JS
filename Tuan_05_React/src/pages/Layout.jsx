import { Outlet } from "react-router-dom";
import DashBoard from "../components/LeftMenu/DashBoard";

function Layout(){
    return (
        <>
        <DashBoard></DashBoard>
        <Outlet></Outlet>
        </>
    )
}

export default Layout;

