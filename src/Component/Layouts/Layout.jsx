import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NarBar from "./NavBar/NarBar";

const Layout = () => {
    return (
        <div>
              <NarBar></NarBar>
            {/* outLate */}
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Layout;