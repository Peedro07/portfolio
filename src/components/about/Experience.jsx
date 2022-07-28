import React from "react";

const experienceContent = [
  {
    year: "2017 - Present",
    position: "Développeur Web",
    compnayName: "Freelance",
    details: ` Formateur pour la 3W Académy. Modification et création de site avec PHP.
    Symfony - Création de site web wordpress.
    Optimisation SEO.
    Débogage avec PHP et JS`,
  },
  {
    year: "2020 - 2021",
    position: "Développeur Back-End",
    compnayName: "Qard",
    details: `Création et maintenance d'une API REST (PHP Symfony). Structuration des données pour la sortie API. Développement d'un logiciel pour courtiers.`,
  },
  {
    year: "2019-2020",
    position: "Développeur Web",
    compnayName: "GROUPE ECHO",
    details: `Création de sites vitrine et e-commerce Wordpress. Mise à jour et maintenances des sites. 
    Modification plugin en php et javascript. SEO/ SEA`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
