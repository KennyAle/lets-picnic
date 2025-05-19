import { type Product } from "../types/product.types"
import {motion} from 'framer-motion'

type ProductWrapper = {
  product: Product;
};

export interface ISearchResult {
    searched: boolean,
    searchResult: ProductWrapper[]
}

const SearchResult = ({searched, searchResult}: ISearchResult) => {
    
  return (
    <motion.div className="fixed h-[calc(100vh-68px)] overflow-y-auto top-16 z-100 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-white"
        initial={{opacity:0, y:"-100%"}}
        animate={{opacity:1, y:0}}
        transition={{
            type: "spring",     
            stiffness: 50,      
            damping: 10,        
            duration: 0.2,      
  }}
    >
        {searched && (
          searchResult.length > 0 ? (
            searchResult.map(item => (
            <div key={item.product.id} className="flex flex-col justify-center items-center p-4 rounded-lg">
                <img src={item.product.image} alt={item.product.productName} className="w-1/2"/>
                <h2 className="text-center text-green-900 font-semibold">{item.product.productName}</h2>
                <p className="text-green-900 font-bold text-xl">${item.product.price.toFixed(2)}</p>
            </div>
            ))
          ):(
            <div className="flex w-screen justify-center items-center">
                <img src="images/img_sorry.png" alt="" />
            </div>
            
          )
      )}
    </motion.div>
  )
}

export default SearchResult