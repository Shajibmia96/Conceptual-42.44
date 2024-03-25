import { NavLink } from "react-router-dom";

const NarBar = () => {
    return (
        <div>
            <div className="flex justify-between py-7 shadow-md px-80 mb-5">
                    <h1 className="text-xl font-bold">Shajib Fashion</h1>
                     <nav className="font-bold  flex gap-5 ">
                          <NavLink className='hover:bg-green-400 rounded-lg' to='/'>Home</NavLink>
                          <NavLink className='hover:bg-green-400 rounded-lg' to='/products'>Products</NavLink>
                          <NavLink className='hover:bg-green-400 rounded-lg' to='/about'>About</NavLink>
                          <NavLink className='hover:bg-green-400 rounded-lg' to='/dashboard'>DashBoard</NavLink>
                     </nav>
              </div>
        </div>
    );
};

export default NarBar;