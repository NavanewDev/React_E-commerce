import { NavLink } from "react-router-dom";
import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar()
{
    return (
        <div>
            {/* {Navbar Top} */}
            <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full">
                <div className="lg:container px-4 flex justify-between items-center">
                    <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize"><Check /> Free on all orders over $50</p>
                
                    <div className="navbar_top_right flex items-center gap-6">
                        <select defaultValue="Server location" className="bg-none h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white">
                            <option>Eng</option>
                            <option>Sinhala</option>
                        </select>

                        <button><Link className="text-sm text-white font-inter font-normal capitalize">Faqs</Link></button>
                        <button><Link className="flex items-center text-sm text-white font-inter font-normal capitalize"><Info /> need help</Link></button>
                    </div>
                </div>
            </div>

            {/* {Navbar Middle} */}
            <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
                <div className="lg:container grid grid-cols-3 items-center">
                    <div className="logo_wrapper">
                        <Link to="/" className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2 px-4">
                            <Armchair size='2rem' color="#029fae"/> Comforty
                        </Link>
                    </div>

                    <div className="search_box">
                        <form action="#" className="max-w-[443px] h-[44px] relative">
                            <input type="text" placeholder="Search here...." className="max-w-[443px] w-full h-full bg-white rounded-lg pl-4"/>
                            <button className="absolute to-50% right-4 translate-y-1/2"><Search size='22px' color="#272343"/></button>
                        </form>
                    </div>

                    {/* navbar middle right */}
                    <div className="navbar_middle_right flex items-center gap-6">
                        <button className="btn capitalize">
                            <ShoppingCart className="mr-5"/> cart <div className="badge badge-sm badge-secondary">2</div>
                        </button>
                        <button className="btn capitalize">
                            <Heart />
                        </button>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1"><User /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Account</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar bottom */}
            <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
                <div className="lg:container flex items-center justify-between px-4">
                    <div className="navbar_bottom_left flex items-center justify-between gap-8">
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1"><Menu /> All Categories</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Trousers</a></li>
                                <li><a>Shorts</a></li>
                                <li><a>Shirts</a></li>
                                <li><a>T-Shirts</a></li>
                            </ul>
                        </div>

                        <nav className="flex items-center gap-8">
                            <NavLink to="/" className="text-sm text-[#029fae] font-inter font-medium capitalize">Home</NavLink>
                            <NavLink to="/" className="text-sm text-[#636270] font-inter font-medium capitalize">Shop</NavLink>
                            <NavLink to="/" className="text-sm text-[#636270] font-inter font-medium capitalize">Product</NavLink>
                            <NavLink to="/" className="text-sm text-[#636270] font-inter font-medium capitalize">Pages</NavLink>
                            <NavLink to="/" className="text-sm text-[#636270] font-inter font-medium capitalize">About</NavLink>
                        </nav>
                    </div>

                    <div className="navbar_bottom_right">
                        <p className="text-sm text-[#636270] font-inter font-normal capitalize">Contact: <span className="text-[#272343]">
                            (+61) 000 000 000</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;