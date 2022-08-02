import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Villes : </span> Angers - Nantes
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Email : </span>{" "}
        <a href="mailto:steve@mail.com">contact@pierre-waflart.fr</a>
      </p>
      {/* End .custom-span-contact */}
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
