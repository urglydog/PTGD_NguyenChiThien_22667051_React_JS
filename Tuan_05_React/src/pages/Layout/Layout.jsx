import { Outlet } from "react-router-dom";
import DashBoard from "../../components/LeftMenu/DashBoard";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header'
import logo from "../../img/logo.PNG?url"
import avt from "../../img/avt.PNG?url"

import '../Layout/Layout.css'

function Layout() {
    return (
        <>
            {/* <div className="Layout">
            </div> */}
            <div class="container">
                <div class="header">
                    <Header className="header"
                        img={logo}
                        filterPops
                        navigator={["What to cook", "Recipes", "Ingredients", "Occasions", "About us"]}
                        buttonProps={{ img: "../icons/inbox.SVG", text: "Your Recipe Box", color: "#CD7595" }}
                        linkImg={avt}
                    ></Header>
                </div>
                <div class="menu">
                    <DashBoard></DashBoard>

                </div>
                <div class="content">
                    <Outlet></Outlet>
                </div>
                <div class="footer">
                    <Footer></Footer>
                </div>
            </div>

        </>
    )
}

export default Layout;

