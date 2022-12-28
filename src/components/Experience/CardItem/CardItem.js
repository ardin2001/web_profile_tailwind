const CardItem = ({ icon, title }) => {
    return (
      <div className="flex flex-col w-1/3 rounded-lg py-4 bg-third self-stretch overflow-hidden lg:w-1/6">
        <img src={icon} alt={title} className="w-1/4 m-auto" />
        <h3 className="px-4 pt-2 font-bold text-lg">{title}</h3>
      </div>
    );
  };
export default CardItem;
  