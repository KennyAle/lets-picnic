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
      <Link to="/" className="text-white font-bold text-xl p-4 hover:underline">Home</Link>
      <Link to="/products" className="text-white font-bold text-xl p-4 hover:underline">Products</Link>
      <Link to="/products/category/1-beauty" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">Beauty</Link>
      <Link to="/products/category/2-fragrances" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">Fragrances</Link>
      <Link to="/products/category/3-funiture" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">Funitures</Link>
      <Link to="/products/category/4-groceries" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">Groceries</Link>
      <Link to="/" className="text-white font-bold text-xl p-4 hover:underline">About Us</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">About Let's Picnic</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">Carrers</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">News & Blog</Link>
      <Link to="/products" className="text-white font-bold text-xl p-4 hover:underline">Help</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">Shopcart Help</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">Returns</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">Track Order</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3 hover:underline">Contact Us</Link>     
    </motion.div>
  )
}

export default Menu