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

const Banner = () => {
  return (
    <div className="relative bg-teal-950 sm:h-screen flex flex-col sm:flex-row justify-around items-center">
      <motion.section className="sm:w-1/3 flex flex-col justify-center p-5 sm:items-start sm:gap-0 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <motion.h1 className="text-white text-5xl font-extrabold tracking-tighter leading-relaxed sm:leading-snug" variants={item}>
          We bring the store to your door
        </motion.h1>
        <motion.p className="text-white" variants={item}>
          Get organic produce and sustainably sourced groceries delivery at up
          to 4% off grocery.
        </motion.p>
        <motion.button className="bg-lime-300 rounded-md font-bold p-2 w-1/3" variants={item}>
          Shop now
        </motion.button>
      </motion.section>
      <motion.img
        className="self-end h-3/4 w-2/4"
        src="images/img_foods.png"
        alt=""
        initial={{opacity:0, y:90}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease: "easeOut"}}
      />
      <svg
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        viewBox="0 0 1440 101"
        preserveAspectRatio="none"
      >
        <path
          fill="#f6f3f4"
          d="M0,0 C360,100 1080,0 1440,100 L1440,101 L0,101 Z"
        />
      </svg>
    </div>
  );
};

export default Banner;
