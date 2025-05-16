type CategoryItemProps = {
  name: string;
  // desc: string;
  //   imageUrl: string;
};

const CategoryItem = ({ name }: CategoryItemProps) => {
  return (
    <>
      <h3 className="font-semibold">{name}</h3>
      <p className="font-semibold text-gray-500">{name}</p>
      <img
        className="absolute bottom-3 right-3"
        src="https://placehold.co/40x40"
        alt={name}
      />
    </>
  );
};

export default CategoryItem;
