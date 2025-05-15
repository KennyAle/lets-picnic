type ConfirmItemProps = { 
    thumbnail: string;
    title: string;
    weight: number;
    price: number;
}

const ConfirmItem = ( {thumbnail, title, weight, price}: ConfirmItemProps) => {
  return (
    <div className="flex gap-5 items-center p-5 rounded-lg bg-gray-100">
      <img className="w-1/7" src={thumbnail} alt="" />
      <div className="flex flex-col">
        <h3 className="font-bold">{title}</h3>
        <p className="text-slate-500">{weight}gm</p>
        <span className="pt-1 font-bold text-xl">${price}</span>
      </div>
      <div className="flex gap-3 ml-auto justify-center items-center">
        <button className="border-2 rounded-full w-8 h-8 flex justify-center items-center text-md">
          +
        </button>
        <span className="text-2xl">1</span>
        <button className="border-2 rounded-full flex justify-center items-center w-8 h-8 text-md">-</button>
      </div>
    </div>
  );
};

export default ConfirmItem;
