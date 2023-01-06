import CardItem from "../CardItem/CardItem";

const CardList = ({ data}) => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {data.map(element => {
        return (
          <CardItem
            key={element.id}
            image={element.image}
            title={element.title}
            description={element.description}
          />
        );
      })}
    </div>
  );
};
export default CardList;
