import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NarBar from "./NavBar/NarBar";
import Spinner from "../Spinner/Spinner";

const Layout = () => {
    const navigation = useNavigation()
    const isLoading =(navigation.state === 'loading')
    return (
        <div>
              <NarBar></NarBar>
            {/* outLate */}
            
            {
                isLoading ? <Spinner></Spinner> : <div className="min-h-screen">
                <Outlet></Outlet>
                </div>
            }

            <Footer></Footer>

        </div>
    );
};

export default Layout;