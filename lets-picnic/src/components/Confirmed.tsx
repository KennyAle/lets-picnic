const Confirmed = () => {
  return (
    <div className="fixed text-center z-10000 bg-white rounded-xl p-8 flex flex-col gap-10 w-1/3">
      <div className="text-teal-900">
        <h2 className="text-3xl font-bold tracking-tight">Order Confirmed</h2>
        <p className="text-gray-600 text-md tracking-tight font-semibold">
          We have received your order. You'll get a confirmation email to{" "}
          <span className="font-bold">letsgo@picnic.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-3.5">
        <button className="w-full text-teal-950 bg-white-300 outline-1 outline-teal-900 cursor-pointer font-semibold p-4 rounded-full text-md">
          View order details
        </button>
        <button className="w-full text-teal-950 bg-lime-300 cursor-pointer font-semibold p-4 rounded-full text-md">
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default Confirmed;
