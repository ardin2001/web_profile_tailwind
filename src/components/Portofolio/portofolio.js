import React from "react";
import data_portofolio from "../../utils/data_portofolio";
import CardList from "../CardList/CardList";
const Portofolio = () => {
  return (
    <section id="portofolio" className="pb-5">
      <div className="container">
        <h2 className="font-bold text-2xl text-primary  text-center">My Portofolio</h2>
        <p className="text-secondary  text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          deserunt voluptatum quae debitis doloremque hic.
        </p>
        <CardList data={data_portofolio} tester={"anjai"} />
      </div>
    </section>
  );
};
export default Portofolio;
