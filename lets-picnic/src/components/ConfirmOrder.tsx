import products from "../assets/product.json";
import ConfirmItem from "./ConfirmItem";

const ConfirmOrder = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-7 bg-white rounded-lg px-5 py-7">
          <h2 className="text-teal-800 font-bold text-xl">
            Delivery Information
          </h2>
          <div className="flex gap-5 items-center">
            <img
              className="h-full rounded-2xl"
              src="https:placehold.co/40x40"
              alt=""
            />
            <div className="font-semibold text-slate-500">
              <h3 className="text-slate-500 font-bold pb-1">Delivery to:</h3>
              <p>(+1) 123-456-7890</p>
              <p>Fraser St. Vancouver, British Columbia, CA, V5V 1N1</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 bg-white rounded-lg px-5 py-7 h-72 no-scrollbar overflow-scroll">
          <h2 className="text-teal-800 font-bold text-xl">Review Items</h2>
          <div className="flex flex-col gap-3 text-teal-900 font-semibold">
            {products.products.map((product) => (
              <ConfirmItem
                key={product.id}
                thumbnail={product.thumbnail}
                title={product.title}
                weight={product.weight}
                price={product.price}
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
              <span className="text-teal-800 font-semibold">$37.65</span>
            </li>
            <li className="flex justify-between text-md text-slate-500 font-semibold">
              Delivery fee:{" "}
              <span className="text-teal-800 font-semibold">$16.0</span>
            </li>
            <li className="flex justify-between text-md text-slate-500 font-semibold">
              Coupon discount:
              <span className="text-teal-800 font-semibold">$48.0</span>
            </li>
            <li className="flex justify-between text-md text-slate-500 font-semibold">
              Taxes: <span className="text-teal-800 font-semibold">$10.0</span>
            </li>
          </ul>
          <h3 className="flex justify-between text-teal-800 font-bold text-lg">
            Total: <span className="text-teal-800 font-bold">$42.65</span>
          </h3>
          <button className="w-full bg-lime-300 text-teal-950 font-semibold p-4 rounded-full text-md">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
