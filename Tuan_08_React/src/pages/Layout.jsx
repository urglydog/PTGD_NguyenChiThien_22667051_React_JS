import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import banner from "../img/banner.PNG?url";

function Layout() {
  return (
    <>
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full">
        <img src={banner} alt="" className="w-full h-auto object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
