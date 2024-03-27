import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="container mx-auto">
              <div className=" flex gap-[10%]">

                    <div className="bg-purple-200 shadow-2xl rounded-md  w-[20%] p-5">
                        <ul>
                            <li>
                                <Link to='/dashboard'>DashProfile</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/profile'>Profile</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/editProfile'>EditProfile</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[70%]">
                        <Outlet></Outlet>
                    </div>
              </div>
        </div>
    );
};

export default DashBoard;