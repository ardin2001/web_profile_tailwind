import React from "react";
import CardList from "./CardList/CardList";
import Programming from '../../utils/programming-language'
import Fe from '../../utils/fe'
import Database from '../../utils/database'
import Software from '../../utils/software'
const Skills = () => {
  return (
    <section id="skills" className="py-12 my-10 bg-blue-100">
      <div className="text-gray-100 text-center">
        <h3 className="text-4xl mb-12 font-semibold text-secondary">
          My <span className="text-primary">Experience</span>
        </h3>
        <CardList data={Programming} description={'Programming Languages'} />
        <CardList data={Fe} description={'Frontend Development'} />
        <CardList data={Database} description={'Database'} />
        <CardList data={Software} description={'Software'} />
      </div>
    </section>
  );
};

export default Skills;
