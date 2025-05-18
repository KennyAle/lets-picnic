import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <motion.div className="fixed h-[calc(100vh-68px)] overflow-hidden top-16 left-0 z-1000 flex flex-col w-1/5 bg-teal-950 overflow-y-auto"
      initial={{x:"-100%"}}
      animate={{x:0}}
      exit={{x:"-100%"}}
      transition={{duration:0.4}}
    >
      <Link to="/" className="text-white font-bold text-xl p-4">Home</Link>
      <Link to="/products" className="text-white font-bold text-xl p-4">Products</Link>
      <Link to="/products/category/beauty" className="text-white font-bold text-xs pl-8 pb-3">Beauty</Link>
      <Link to="/products/category/fragrances" className="text-white font-bold text-xs pl-8 pb-3">Fragrances</Link>
      <Link to="/products/category/funiture" className="text-white font-bold text-xs pl-8 pb-3">Funitures</Link>
      <Link to="/products/category/groceries" className="text-white font-bold text-xs pl-8 pb-3">Groceries</Link>
      <Link to="/" className="text-white font-bold text-xl p-4">About Us</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3">About Let's Picnic</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3">Carrers</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3">News & Blog</Link>
      <Link to="/products" className="text-white font-bold text-xl p-4">Help</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3">Shopcart Help</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3">Returns</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3">Track Order</Link>
      <Link to="/" className="text-white font-bold text-xs pl-8 pb-3">Contact Us</Link>     
    </motion.div>
  )
}

export default Menu