import CardItem from "../CardItem/CardItem";

const CardList = ({ data, tester }) => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {console.log(data)}
      {console.log(tester)}
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
