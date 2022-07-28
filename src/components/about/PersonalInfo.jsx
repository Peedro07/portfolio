import React from "react";

const personalInfoContent = [
  { meta: "Prénom", metaInfo: "Pierre" },
  { meta: "Nom", metaInfo: "Waflart" },
  { meta: "Age", metaInfo: "28 ans" },
  { meta: "Nationalité", metaInfo: "Français" },
  { meta: "Freelance", metaInfo: "Disponible" },
  { meta: "Adresse", metaInfo: "Angers" },
  { meta: "Email", metaInfo: "pierre.waflart@gmail.com" },
  { meta: "Langues", metaInfo: "Français, Anglais" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
