import { FaSearch } from "react-icons/fa";
const navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a href="#Explore">Recipe</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                    </div>
                    <a className="font-bold text-lg md:text-2xl">Savory Haven Eatery</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a href="#Explore">Recipe</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                
            
            <div className="navbar-end">
                <div className="hidden md:block">
                    <label className="me-4 h-10 input rounded-full input-bordered flex items-center gap-2">
                        <FaSearch /><input type="text" className="grow focus:outline-none" placeholder="Search" />
                    </label>
                </div>
                <div >
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                             <img alt="Tailwind CSS Navbar component" src="https://cdn-icons-png.flaticon.com/512/306/306003.png" />
                         </div>
                    </div>
                </div>
            </div>


        </div>
            
        </div>
    );
};

export default navbar;