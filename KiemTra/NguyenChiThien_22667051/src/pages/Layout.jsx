import {Outlet} from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
function Layout(){
    return (
        <>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </>
    )
}

export default Layout;