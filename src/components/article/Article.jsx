import "./article.scss"
import {useEffect, useState} from "react";
import react from '../../assets/img/stacks/react-js.png'
import node from '../../assets/img/stacks/node-js.png'
import symfony from '../../assets/img/stacks/symfony.png'
import strapi from '../../assets/img/stacks/strapi.jpg'
import php from '../../assets/img/stacks/php.png'
import bootstrap from '../../assets/img/stacks/bootstrap.png'
import html from '../../assets/img/stacks/html-5.png'
import sass from '../../assets/img/stacks/sass.png'
import css from '../../assets/img/stacks/css-3.png'
import vue from '../../assets/img/stacks/vuejs.png'
import wp from '../../assets/img/stacks/wp.png'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {GiSpaceSuit} from "react-icons/gi";

const Article = (props) => {
    const [view, setView] = useState(<About/>)


    let displayView = () => {
        switch (props.router) {
            case 'about' :
                setView(<About/>);
                break;
            case 'stack' :
                setView(<Stack/>);
                break;
            case 'mission' :
                setView(<Mission/>);
                break;
            case 'contact' :
                setView(<Contact/>);
                break;
        }
    }

    useEffect(() => {
        displayView();
    }, [props])

    return (
        <>
            <div className={"article"}>

                {view}

            </div>

        </>
    )
}

export default Article

const About = () => {
    const birth = () => {
        let old = new Date('1994 03 10')
        let diff = Date.now() - old.getTime();
        let age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }
    return (
        <>
            <div className="title">
                <h2>Qui suis-je ?</h2>
                <span className="separator"/>
            </div>
            <div className="about">
                <div className="content-about">
                    <p>
                        Je m'appelle Pierre Waflart. Bienvenu sur mon portefolio, n'hesite pas à naviguer sur
                        celui-ci via les boutons. Tu peux aussi t'amuser à changer de theme !
                    </p>
                </div>
                <div className="description-about">
                    <div className="card">
                        <span className="cat">{birth()} ans</span>
                        <span className="cat">France</span>
                        <span className="cat">Angers</span>
                    </div>
                </div>
            </div>
        </>
    )

}

const Stack = () => {

    return (
        <>
            <div className="title">
                <h2>Mes stacks</h2>
                <span className="separator"/>
            </div>
            <p>Au cours de mes divers années de développement, j'ai pu apréhender plusiers stacks. Vous pouvez les
                découvrir ci dessous.</p>
            <div className="stack">
                <div className="back">
                    <div className="title">
                        <h2>Back-end</h2>
                        <div className="separator"></div>
                    </div>
                    <div className="images">
                        <img src={symfony} alt=""/>
                        <img src={node} alt=""/>
                        <img src={strapi} alt=""/>
                        <img src={php} alt=""/>
                        <img src={wp} alt=""/>
                    </div>
                </div>

                <div className="front">
                    <div className="title">
                        <h2>Front-end</h2>
                        <div className="separator"></div>
                    </div>
                    <div className="images">
                        <img src={react} alt=""/>
                        <img src={vue} alt=""/>
                        <img src={sass} alt=""/>
                        <img src={html} alt=""/>
                        <img className="css" src={css} alt=""/>
                        <img src={bootstrap} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

const Mission = () => {
    return (
        <>
            <div className="title">
                <h2>Missions</h2>
                <span className="separator"/>
            </div>
            <p>
                Etant autodidacte et passioné par le web, j'ai pu réaliser et travailler sur diverse mission.
            </p>
            <div className="mission">
                <ul>
                    <li><GiSpaceSuit/>Création de site en <strong>PHP POO</strong></li>
                    <li><GiSpaceSuit/>Création d'API avec <strong>nodeJs</strong> en utilisant <strong>Strapi ou
                        Express</strong></li>
                    <li><GiSpaceSuit/>Création & refonte <strong>d'API avec Symfony</strong></li>
                    <li><GiSpaceSuit/>Création de template <strong>HTML CSS</strong></li>
                    <li><GiSpaceSuit/>Création de site <strong>Wordpress avec DIVI et Elementor</strong></li>
                    <li><GiSpaceSuit/>Mise en place et refonte du <strong>SEO</strong> sur plusieurs sites</li>
                </ul>
            </div>
        </>
    )
}

const Contact = () => {
    return (
        <>
            <div className="title">
                <h2>Contact</h2>
                <span className="separator"/>
            </div>
            <p>
                Vous avez une besoin d'un développeur pour dévélopper votre futur application ? <br/>
                N'hésitez pas à me contacter via les différents channels que je vous propose ci dessous.
            </p>
            <div className="contact">
                <ul>
                    <li><a href="https://github.com/Peedro07/" target="_blank"><FaGithub/></a></li>
                    <li><a href="https://www.linkedin.com/in/pierre-waflart/" target="_blank"><FaLinkedin/></a></li>
                    <li><a href="mailto:pierre.waflart@gmail.com" target="_blank"><FiMail/></a></li>
                </ul>
            </div>

        </>
    )
}
