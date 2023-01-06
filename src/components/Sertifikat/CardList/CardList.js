import CardItem from "../CardItem/CardItem";
import data_sertifikat from "../Sertifikat";

const Sertifikat = () => {
  return (
    <section id="sertifikat" className="container my-20">
        <h3 className="text-center text-4xl font-semibold pb-6">Sertifkat</h3>
        <div className="grid grid-cols-[80%] auto-cols-[80%] overflow-scroll grid-flow-col gap-3 md:overflow-visible md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data_sertifikat.map(element => {
                return <CardItem key={element.id} data={element.image} />
            })}
        </div>
    </section>
  );
};
export default Sertifikat;
// grid gap-3 justify-around md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4