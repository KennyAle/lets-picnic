import { FaHamburger, FaStore, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TiFlash } from "react-icons/ti";



const Nav = () => {
    return (
        <nav>
            <div className="container flex justify-between bg-teal-950 p-4">
                <div className="left-nav flex justify-around items-center gap-3.5">
                    <FaHamburger className="text-[#f3f5f4]" />
                    <FaStore className="text-[#edbc4a]" />
                    <h3 className="text-white">Let's Picnic</h3>
                    <div className="search-container flex justify-center items-center bg-white rounded-3xl">
                        <input className="bg-white rounded-3xl w-100 m-1 outline-none focus:ring-0 pl-4 px-2 py-1" type="text" placeholder="Search item..." /><CiSearch className="bg-white rounded-3xl w-10 text-2xl font-bold" />
                    </div>
                    
                </div>
                <div className="right-nav flex justify-around items-center gap-3.5">
                    <TiFlash className="text-yellow-300"/>
                    <p className="text-white">Order now and get it!</p>
                    <div className="cart-container flex justify-center items-center rounded-full bg-white w-10 h-10">
                        <FaShoppingCart className="w-full text-teal-800" />
                    </div>
                    <img className="rounded-full w-10 h-10" src="https://placehold.jp/150x150.png" alt="" />

                </div>
            </div>
        </nav>
    )
    //   #064c4e
    // #f3f5f4
    // #edbc4a
}

export default Nav