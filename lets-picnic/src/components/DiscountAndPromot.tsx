import { motion } from "framer-motion";

const container ={
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut"
    },
  },
}
const item = {
  hidden: { opacity: 0, x: 30},
  show: { opacity: 1, x: 0, transition: { duration:0.2, ease: "easeOut"}}
}

const DiscountAndPromot = () => {
  return (
    <motion.div className="flex flex-col sm:flex-row sm:justify-between items-center gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
    >
        <motion.section className="flex flex-col justify-center w-3xs h-100 bg-pink-200 rounded-2xl" variants={item}>
            <div className="h-1/2 flex flex-col gap-3 justify-center bg-pink-200 rounded-t-2xl px-7 pt-3">
                <h2 className="text-rose-950 font-extrabold text-lg">Save</h2>
                <h3 className="text-rose-800 font-extrabold text-3xl font-mono">$29</h3>
                <p className="font-semibold">Enjoy Dicount all types of Grocery & frozen item</p>
            </div>
            <div className="h-1/2 flex justify-center items-center bg-rose-900 rounded-b-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-3/4 after:bg-rose-950 after:rounded-[70px_70px_70px_15px] round-shape-top">
                <img className="h-fit w-3/4 z-10" src="https://freepngimg.com/thumb/yummy/162136-chips-lays-png-download-free.png" alt="" />
            </div>
        </motion.section>

        <motion.section  className="flex flex-col justify-center w-3xs h-100 bg-orange-200 rounded-2xl" variants={item}>
            <div className="h-1/2 flex flex-col gap-3 justify-center bg-orange-200 rounded-t-2xl px-7 pt-3">
                <h2 className="text-orange-950 font-extrabold text-lg">Discount</h2>
                <h3 className="text-orange-900 font-extrabold text-3xl font-mono">30%</h3>
                <p className="font-semibold">Enjoy Dicount all types of Grocery & frozen item</p>
            </div>
            <div className="h-1/2 flex justify-center items-center bg-orange-800 rounded-b-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-3/4 after:bg-orange-900 after:rounded-[70px_70px_70px_15px] round-shape-top">
                <img className="h-fit w-2/4 z-10" src="https://freepngimg.com/thumb/honey/150509-honey-bottle-free-clipart-hq.png" alt="" />
            </div>
        </motion.section >

        <motion.section className="flex flex-col justify-center w-3xs h-100 bg-blue-200 rounded-2xl" variants={item}>
            <div className="h-1/2 flex flex-col gap-3 justify-center bg-blue-200 rounded-t-2xl px-7 pt-3">
                <h2 className="text-blue-900 font-extrabold text-lg">Up tp</h2>
                <h3 className="text-blue-800 font-extrabold text-3xl font-mono">50%</h3>
                <p className="font-semibold">Enjoy Dicount all types of Grocery & frozen item</p>
            </div>
            <div className="h-1/2 flex justify-center items-center bg-blue-900 rounded-b-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-3/4 after:bg-blue-950 after:rounded-[70px_70px_70px_15px] round-shape-top">
                <img className="h-fit w-2/4 z-10" src="https://freepngimg.com/thumb/bread/170069-bagel-png-free-photo.png" alt="" />
            </div>
        </motion.section>

        <motion.section className="flex flex-col justify-center w-3xs h-100 bg-purple-200 rounded-2xl" variants={item}>
            <div className="h-1/2 flex flex-col gap-3 justify-center bg-purple-200 rounded-t-2xl px-7 pt-3">
                <h2 className="text-purple-950 font-extrabold text-lg">Free</h2>
                <h3 className="text-purple-900 font-extrabold text-3xl font-mono">SHIP</h3>
                <p className="font-semibold">Enjoy Dicount all types of Grocery & frozen item</p>
            </div>
            <div className="h-1/2 flex justify-center items-center bg-purple-900 rounded-b-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-3/4 after:bg-purple-950 after:rounded-[70px_70px_70px_15px] round-shape-top">
                <img className="h-fit w-3/4 z-10" src="https://freepngimg.com/thumb/drink/135228-juice-vinegar-cider-apple-beet.png" alt="" />
            </div>
        </motion.section>
    </motion.div>
  )
}

export default DiscountAndPromot