import { NavLink } from "react-router-dom";

const NarBar = () => {
    return (
        <div>
            <div className="flex justify-between py-7 shadow-md px-80 mb-5">
                    <h1 className="text-xl font-bold">Shajib Fashion</h1>
                     <nav className="font-bold  flex gap-5 ">
                          <NavLink  to='/' className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'bg-green-300 p-1' : 'bg-blue-300 p-1'}>Home</NavLink>

                          <NavLink  to='/products' className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'bg-green-300 p-1 ' : 'bg-blue-300 p-1'}>Products</NavLink>

                          <NavLink  to='/about' className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'bg-green-300 p-1' : 'bg-blue-300 p-1'}>About</NavLink>

                          <NavLink  to='/dashboard' className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'bg-green-300 p-1 ' : 'bg-blue-300 p-1'}>DashBoard</NavLink>
                     </nav>
              </div>
        </div>
    );
};

export default NarBar;