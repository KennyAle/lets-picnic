import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <motion.div className="fixed h-[calc(100vh-68px)] overflow-hidden top-16 left-0 z-1000 flex flex-col w-1/5 bg-teal-950 overflow-y-auto no-scrollbar"
      initial={{x:"-100%"}}
      animate={{x:0}}
      exit={{x:"-100%"}}
      transition={{duration:0.4}}
    >
      <Link to="/" className="text-white font-bold text-xl p-4">Home</Link>
      <Link to="/products" className="text-white font-bold text-xl px-4 py-3">Products</Link>
      <Link to="/products/category/1-beauty" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">Beauty</Link>
      <Link to="/products/category/2-fragrances" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">Fragrances</Link>
      <Link to="/products/category/3-funiture" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">Funitures</Link>
      <Link to="/products/category/4-groceries" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">Groceries</Link>
      <Link to="/" className="text-white font-bold text-xl px-4 py-3">About Us</Link>
      <Link to="/" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">About Let's Picnic</Link>
      <Link to="/" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">Carrers</Link>
      <Link to="/" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">News & Blog</Link>
      <Link to="/products" className="text-white font-bold text-xl px-4 py-3">Help</Link>
      <Link to="/" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">Shopcart Help</Link>
      <Link to="/" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">Returns</Link>
      <Link to="/" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">Track Order</Link>
      <Link to="/" className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white">Contact Us</Link>     
    </motion.div>
  )
}

export default Menu