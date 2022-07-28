import React from "react";

const educationContent = [
  {
    year: "2021",
    degree: "CDA",
    institute: "CEFII",
    details: `Formation concepteur et développeur d'application.`,
  },
  {
    year: "2019",
    degree: "DEVELOPPEUR WEB & WEB MOBILE",
    institute: "ENI ECOLE",
    details: `Développeur web & web mobile, php javascript html css.`,
  },
  {
    year: "2016",
    degree: "FORMATION CALAS ",
    institute: "THE VILLAGE",
    details: `Créateur d'ambiances ludiques artistiques sportives.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
