import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/dark.jpg";
import Me from "../../assets/img/hero/me.jpg";
import MeMobile from "../../assets/img/hero/me-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../about";

const heroContent = {
  heroImage: Me,
  heroMobileImage: MeMobile,
  heroTitleName: "pierre waflart",
  heroDesignation: "développeur web full stack",
  heroDescriptions: `Je suis développeur PHP/JS. J'ai pu travailler dans diverses entreprises sur des stacks comme Symfony, NodeJS et ReactJS.
En ayant commencé comme autodidacte, je suis passionné par le développement web. Mes projets gravitent autour de Symfony / NodeJS ainsi que ReactJS.
N'hésitez pas à me contacter pour toute sorte de projet, je serai ravi d'en discuter autour d'un café.`,
  heroBtn: "En savoir plus sur moi ",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  A propos de <span>moi</span>
                </h1>
                <span className="title-bg">Informations</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
