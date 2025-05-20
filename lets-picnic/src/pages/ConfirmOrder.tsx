import { useCart } from "@/contexts/CartContext";
import ConfirmItem from "../components/ConfirmItem";
import { FaMapLocationDot } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import Confirmed from "@/components/Confirmed";
import Confetti from "react-confetti";
import { useSession } from "@/contexts/SessionContext";

const ConfirmOrder = () => {
  const { cartItems, total } = useCart();
  const parent = useRef(null);
  const formParent = useRef(null);
  const { user } = useSession();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [attemptedConfirm, setAttemptedConfirm] = useState(false);
  
  const handleConfirm = () => {
    setAttemptedConfirm(true);
    if (!user || isEmpty) return;
    setShowConfirmation(true);
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent.current]);

  useEffect(() => {
    formParent.current && autoAnimate(formParent.current);
  }, [formParent.current]);

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => setShowConfirmation(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmation]);

  const isEmpty = total === 0;
  const deliveryFee = isEmpty ? 0 : total < 50 ? 5 : 0;
  const taxes = isEmpty ? 0 : (total + deliveryFee) * 0.1;
  const couponDiscount = 0;

  const grandTotal = isEmpty ? 0 : total + deliveryFee + taxes - couponDiscount;

  return (
    <>
      {showConfirmation && (
        <>
          <Confirmed onClose={() => setShowConfirmation(false)} />
          <Confetti tweenDuration={100} gravity={0.4} />
        </>
      )}
      <div className="flex flex-col md:flex-row p-4 md:p-10 gap-5 bg-gray-100">
        <div className="flex flex-col gap-5 w-full md:w-2/3">
          <div className="flex flex-col gap-7 bg-white rounded-lg px-5 py-7">
            <h2 className="text-teal-800 font-bold text-xl">
              Delivery Information
            </h2>
            <div className="flex gap-5 items-center">
              <FaMapLocationDot className="w-10 h-10 rounded-2xl" />
              <div className="font-semibold text-slate-600">
                <h3 className="text-slate-500 font-bold pb-1">Deliver to:</h3>
                <p>Fraser St. Vancouver, British Columbia, CA, V5V 1N1</p>
                <p>(+1) 123-456-7890</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 bg-white rounded-lg px-5 py-7 max-h-120">
            <h2 className="text-teal-800 font-bold text-xl">Review Items</h2>
            <div
              ref={parent}
              className="flex flex-col gap-3 text-teal-900 font-semibold no-scrollbar overflow-scroll"
            >
              {cartItems.map((product) => (
                <ConfirmItem
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  productName={product.productName}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div ref={formParent} className="flex flex-col gap-7 bg-white rounded-lg px-5 py-7">
            <h2 className="text-teal-800 font-bold text-xl">Order summary</h2>
            <ul className="w-full flex flex-col gap-3">
              <li className="flex justify-between text-md text-slate-500 font-semibold">
                Subtotal:
                <span className="text-teal-800 font-semibold">
                  ${total.toFixed(2)}
                </span>
              </li>
              <li className="flex justify-between text-md text-slate-500 font-semibold">
                Delivery fee:
                <span className="text-teal-800 font-semibold">
                  ${deliveryFee.toFixed(2)}
                </span>
              </li>
              <li className="flex justify-between text-md text-slate-500 font-semibold">
                Coupon discount:
                <span className="text-teal-800 font-semibold">
                  -${couponDiscount.toFixed(2)}
                </span>
              </li>
              <li className="flex justify-between text-md text-slate-500 font-semibold">
                Taxes:
                <span className="text-teal-800 font-semibold">
                  ${taxes.toFixed(2)}
                </span>
              </li>
            </ul>
            <h3 className="flex justify-between text-teal-800 font-bold text-lg">
              Total:
              <span className="text-teal-800 font-bold">
                ${grandTotal.toFixed(2)}
              </span>
            </h3>
            <button
              onClick={handleConfirm}
              className={`w-full ${
                isEmpty
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-lime-300 cursor-pointer"
              } text-teal-950 font-semibold p-4 rounded-full text-md`}
              disabled={isEmpty}
            >
              Confirm Order
            </button>

            {attemptedConfirm && !user && (
              <p className="text-red-500 font-medium text-sm">
                You have to log in first
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
