import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const AppDownload = () => {
  return (
    <motion.div
      className="flex justify-around items-center overflow-hidden"
      initial={{ opacity: 0, transformOrigin: "center center" }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      viewport={{ once: true }}
    >
      <div
        className="overflow-hidden flex justify-around items-center w-full p-10 bg-pink-900 rounded-3xl bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='none' stroke='%23f9caca' stroke-width='0.3'%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3Cpath d='M60 20 Q65 10 70 20 Q75 30 80 20'/%3E%3Crect x='20' y='60' width='20' height='10' rx='3'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 70px",
          backgroundRepeat: "repeat",
        }}
      >
        <motion.section
          className="flex flex-col gap-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-pink-200 text-2xl sm:text-3xl font-extrabold tracking-tighter"
            variants={item}
          >
            Stay Home and Get All
          </motion.h2>
          <motion.h2
            className="text-pink-200 text-2xl sm:text-3xl font-extrabold tracking-tighter"
            variants={item}
          >
            Your Essential From
          </motion.h2>
          <motion.h2
            className="text-pink-200 text-2xl sm:text-3xl font-extrabold tracking-tighter"
            variants={item}
          >
            Our Market!
          </motion.h2>
          <motion.p
            className="text-pink-300 tracking-tighter pt-4"
            variants={item}
          >
            Download the app from store or google play
          </motion.p>
          <motion.div className="flex justify-evenly" variants={item}>
            <img
              className="w-20 h-6 sm:w-30 sm:h-9 rounded-sm"
              src="images/img_app_store.png"
              alt=""
            />
            <img
              className="w-20 h-6 sm:w-30 sm:h-9 rounded-sm"
              src="images/img_google_play.png"
              alt=""
            />
          </motion.div>
        </motion.section>

        <motion.section
          className="flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <img
            className="w-2/4 hidden sm:block"
            src="images/img_deliver_free.png"
            alt=""
          />
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AppDownload;
