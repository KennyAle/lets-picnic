import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ConfirmedProps {
  onClose: () => void;
}

const Confirmed = ({ onClose }: ConfirmedProps) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    onClose();
    navigate("/");
  };
  return (
    <div className="fixed top-0 flex items-center justify-center z-1000 w-screen h-screen bg-black/30">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="top-50 left-50 text-center bg-white rounded-xl p-7 pt-20 flex flex-col gap-15 w-2/6"
      >
        <div className="flex flex-col items-center text-teal-900">
          <svg
            width="60"
            height="60"
            viewBox="0 0 52 52"
            className="text-green-500 w-30 h-30 pb-3"
          >
            <circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="opacity-20"
            />
            <path
              d="M14 27 L22 35 L38 19"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw"
            />
          </svg>
          <h2 className="text-2xl font-bold tracking-tight">Order Confirmed</h2>
          <p className="w-3/4 pt-1 text-gray-500/80 text-sm tracking-tight font-semibold">
            We have received your order. You'll get a confirmation email to{" "}
            <span className="font-bold">letsgo@picnic.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full text-teal-950 bg-white-300 outline-1 outline-teal-900 cursor-pointer font-semibold p-3 rounded-full text-sm">
            View order details
          </button>
          <button
            onClick={handleContinue}
            className="w-full text-teal-950 bg-lime-300 cursor-pointer font-semibold p-3 rounded-full text-sm"
          >
            Continue shopping
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Confirmed;
