import React from "react";
import data_portofolio from "../../utils/data_portofolio";
import CardList from "../CardList/CardList";
const Portofolio = () => {
  return (
    <section id="portofolio" className="pb-5">
      <div className="container">
        <h2 className="font-bold text-2xl text-primary  text-center">
          My Portofolio
        </h2>
        <p className="text-secondary  text-center">
          Some below are some of the results of my project while learning
          programming
        </p>
        <CardList data={data_portofolio} />
      </div>
    </section>
  );
};
export default Portofolio;
