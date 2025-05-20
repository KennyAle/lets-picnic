type CategoryItemProps = {
  name: string;
  description: string;
  image: string;
};

const CategoryItem = ({ name, description, image }: CategoryItemProps) => {
  return (
    <>
      <h3 className="font-bold text-teal-950 capitalize">{name}</h3>
      <p className="font-semibold text-gray-500">{description}</p>
      <img
        className="absolute w-10 h-10 bottom-3 right-3"
        src={image}
        alt={name}
      />
    </>
  );
};

export default CategoryItem;
