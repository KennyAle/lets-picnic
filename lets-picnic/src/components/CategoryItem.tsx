type CategoryItemProps = {
  name: string;
  slug: string;
//   imageUrl: string;
};

const CategoryItem = ({ name, slug }: CategoryItemProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-2 rounded-lg bg-white p-4 shadow-md">
      <h3>{name}</h3>
      <p>{slug}</p>
      <img src="https://placehold.co/20x20" alt={name} />
    </div>
  );
};

export default CategoryItem;
