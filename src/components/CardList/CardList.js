import CardItem from "../CardItem/CardItem";

const CardList = ({ data, tester }) => {
  return (
    <div className="flex flex-wrap justify-evenly p-4 md:px-36 lg:p-4">
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
