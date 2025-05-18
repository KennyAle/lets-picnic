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
  hidden: { opacity: 0, y: 30},
  show: { opacity: 1, y: 0, transition: { duration:0.3, ease: "easeOut"}}
}

const Info = [
  { name: "Order and Collect", image: "images/img_order_collect.png" },
  { name: "Gift Vouchers", image: "images/img_vouchers.png" },
  { name: "Present a Gift card", image: "images/img_gift_card.png" },
  { name: "Pay your Invoice", image: "images/img_pay_your_invoice.png" },
  { name: "Pay your New", image: "images/img_order_collect.png" },
];

const Experience = () => {
  return (
    <div className="relative h-screen flex flex-col items-center bg-lime-300 overflow-hidden">
      <div className="experience w-full h-full bg-gray-100"></div>
      <motion.div className="h-1/2 text-center flex flex-col gap-5 items-center justify-center text-teal-950 p-10"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <motion.h2 className="w-3/6 text-4xl font-bold tracking-tight" variants={item}>
          We always provide
          <motion.br variants={item}/> you the best in town
        </motion.h2>
        <motion.p className="w-4/7 text-sm font-semibold" variants={item}>
          Since 2007 we have been delivering excellence in product development,
          support & updates for frictionless shopping experiences
        </motion.p>
      </motion.div>
      <motion.ul className="flex gap-8 h-1/2 w-max"
        initial={{x:0}}
        animate={{x:"-30%"}}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }}
      >
        {[...Info, ...Info].map((item, index) => (
          <li
            key={index}
            className="round-shape-top flex flex-col justify-end gap-8 w-1/5 h-fit mx-auto px-5 pt-8 bg-teal-950 text-lime-200 font-semibold text-xl"
          >
            <h2 className="self-start w-2/3 ">{item.name}</h2>
            <img src={item.image} className="h-fit w-3/4 self-center" alt="" />
          </li>
        ))}
        
      </motion.ul>
    </div>
  );
};

export default Experience;
