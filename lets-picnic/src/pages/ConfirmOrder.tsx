import { useCart } from "@/contexts/CartContext";
import ConfirmItem from "../components/ConfirmItem";
import { FaMapLocationDot } from "react-icons/fa6";

const ConfirmOrder = () => {
  const { cartItems, total } = useCart();

  const isEmpty = total === 0;
  const deliveryFee = isEmpty ? 0 : total < 50 ? 5 : 0;
  const taxes = isEmpty ? 0 : (total + deliveryFee) * 0.1;
  const couponDiscount = 0;

  const grandTotal = isEmpty ? 0 : total + deliveryFee + taxes - couponDiscount;

  return (
    <div className="flex p-10 gap-5 bg-gray-100">
      <div className="flex flex-col gap-5 w-full">
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

        <div className="flex flex-col gap-7 bg-white rounded-lg px-5 py-7 max-h-80">
          <h2 className="text-teal-800 font-bold text-xl">Review Items</h2>
          <div className="flex flex-col gap-3 text-teal-900 font-semibold no-scrollbar overflow-scroll">
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

      <div className="w-full">
        <div className="flex flex-col gap-7 bg-white rounded-lg px-5 py-7">
          <h2 className="text-teal-800 font-bold text-xl">Order summary</h2>
          <ul className="w-full flex flex-col gap-3">
            <li className="flex justify-between text-md text-slate-500 font-semibold">
              Subtotal:{" "}
              <span className="text-teal-800 font-semibold">
                ${total.toFixed(2)}
              </span>
            </li>
            <li className="flex justify-between text-md text-slate-500 font-semibold">
              Delivery fee:{" "}
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
              Taxes:{" "}
              <span className="text-teal-800 font-semibold">
                ${taxes.toFixed(2)}
              </span>
            </li>
          </ul>
          <h3 className="flex justify-between text-teal-800 font-bold text-lg">
            Total:{" "}
            <span className="text-teal-800 font-bold">
              ${grandTotal.toFixed(2)}
            </span>
          </h3>

          <button
            className={`w-full ${
              isEmpty ? "bg-gray-300 cursor-not-allowed" : "bg-lime-300 cursor-pointer"
            } text-teal-950 font-semibold p-4 rounded-full text-md`}
            disabled={isEmpty}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
