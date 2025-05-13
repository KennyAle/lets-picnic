const Info = [
  { name: "Order and Collect", image: "https://placehold.co/150x200" },
  { name: "Gift Vouchers", image: "https://placehold.co/150x200" },
  { name: "Present a Gift card", image: "https://placehold.co/150x200" },
  { name: "Pay your invoice", image: "https://placehold.co/150x200" },
];

const Experience = () => {
  return (
    <div className="h-screen flex flex-col items-center  bg-lime-300">
      <div className="h-full flex flex-col items-center justify-center text-green-900 p-10">
        <h2>We always provide you the best in town</h2>
        <p>
          Since 2007 we have been delivering excellence in product development,
          support & updates for frictionless shopping experiences
        </p>
      </div>

      <ul className="flex gap-4 h-full">
        {Info.map((item) => (
          <li
            key={item.name}
            className="flex flex-col gap-2 w-1/4 bg-green-900"
          >
            <h2>{item.name}</h2>
            <img src={item.image} className="w-1/2" alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
