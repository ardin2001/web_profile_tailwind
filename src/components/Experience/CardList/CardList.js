import CardItem from "../CardItem/CardItem";

const CardList = ({ data, description }) => {
  return (
    <div className="card-experience mb-8">    
        <p className="text-third text-lg">{description}</p>
        <div className="container flex justify-center mt-3 gap-x-10 gap-y-4 flex-wrap">
        {console.log(data)}
        {data.map(element => {
            return (
            <CardItem
                key={element.id}
                icon={element.icon}
                title={element.title}
            />
            );
        })}
        </div>
    </div>
  );
};
export default CardList;
