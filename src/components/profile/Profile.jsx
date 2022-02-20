import Img from '../../assets/img/pierre-waflart.png';
import './profile.scss'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {useEffect, useState} from "react";

const Profile = () => {
    return (
        <>
            <section className="profile">
                <div className="picture-me">
                    <img src={Img} alt=""/>
                </div>
                <div className="content-me">
                    <h1>Pierre Waflart</h1>
                    <h2 className="view-anim">Web développeur</h2>
                </div>
                <div className="social-icon">
                    <ul>
                        <li><a href=""><FaGithub/></a></li>
                        <li><a href=""><FaLinkedin/></a> </li>
                        <li><a href=""><FiMail/></a></li>
                    </ul>
                </div>

            </section>


        </>
    )
}
export default Profile
