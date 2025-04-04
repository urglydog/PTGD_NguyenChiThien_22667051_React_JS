import { Outlet } from "react-router-dom";
import DashBoard from "../../components/LeftMenu/DashBoard";
import OverView from "../../components/OverView/OverView";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header'
import logo from "../../img/logo.PNG?url"
import avt from "../../img/Avatar (5).PNG?url"
import group from "../../img/Group.png?url"
import logo1 from '../../img/Image 1858.png';

import '../Layout/Layout.css'

function Layout() {
    return (
        <>
            {/* <div className="Layout">
            </div> */}
            <div class="container">
                {/* <div class="header">
                    <Header className="header"
                        img={logo}
                        filterPops
                        navigator={["What to cook", "Recipes", "Ingredients", "Occasions", "About us"]}
                        buttonProps={{ img: "../icons/inbox.SVG", text: "Your Recipe Box", color: "#CD7595" }}
                        linkImg={avt}
                    ></Header>
                </div> */}
                <div className="logo1">
                    <img className="" src={logo1} alt="Logo" />

                </div>

                <div class="menu">
                    <DashBoard></DashBoard>
                </div>
                {/* <div className="img">
                    <img src={group} alt="" />
                </div> */}
                <div className="trynow">
                    <h>V2.0 is available</h>
                    <button type="button" className="btn">Try now</button>
                </div>
                {/* <div className="overview">
                    <OverView></OverView>
                </div> */}
                <div class="content">
                    <Outlet></Outlet>
                </div>
                {/* <div class="footer">
                    <Footer></Footer>
                </div> */}
            </div>

        </>
    )
}

export default Layout;