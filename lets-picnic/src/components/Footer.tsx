import { FaStore } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-stretch items-center justify-center   bg-yellow-50 px-12 py-16 gap-10">
      <div className="flex flex-col justify-between w-full h-full sm:w-2/5">
        <div className="flex flex-col gap-3 justify-center items-center sm:items-start">
          <h2 className="flex items-center gap-2 tracking-tight font-bold text-2xl text-teal-800">
            {/* <img className="w-8 h-8" src="https://freepngimg.com/thumb/emoji/64969-emoticon-symbol-face-facebook-whatsapp-emoji.png" alt="" /> */}
            <FaStore className="text-amber-300 text-2xl" />
            Let's Picnic
          </h2>
          <p className="text-center sm:text-start">
            Let's Picnic is a picnic planning app that helps you plan the
            perfect picnic.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm text-center sm:text-start">Accepted Payments</h3>
          <div className="flex space-x-2 justify-center sm:justify-start">
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
              alt="Visa"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349234.png"
              alt="Mastercard"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
              alt="American Express"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349227.png"
              alt="PayPal"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
              alt="Apple Pay"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349231.png"
              alt="Cash App"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around gap-3 sm:gap-0">
        <div className="flex flex-col gap-3.5">
          <h3 className="font-semibold">Department</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Fashion</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Frozen</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Dairy</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Vegetables</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Meat & Fish</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Grocery</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Furniture</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Beauty</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="font-semibold">About Us</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">About Let's Picnic</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Careers</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">News & Blog</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Help</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="font-semibold">Services</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Gift Card</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Mobile App</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Shopping & Delivery</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Order Pickup</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="font-semibold">Help</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Shopcart Help</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Returns</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Track Order</li>
            <li className="hover:underline opacity-80 hover:opacity-100 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
