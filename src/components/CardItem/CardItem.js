const CardItem = ({ image, title, description }) => {
  return (
    <div className="w-full self-center rounded-lg m-4 shadow-md shadow-gray-400 overflow-hidden lg:w-1/3">
      <img src={image} alt={title} className="h-64 object-cover object-center" />
      <h3 className="px-4 pt-2 font-bold text-lg">{title}</h3>
      <p className="px-4 pb-4">{description}</p>
    </div>
  );
};
export default CardItem;
