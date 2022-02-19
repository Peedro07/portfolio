import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPalette} from '@fortawesome/free-solid-svg-icons'
import {RiAliensFill} from 'react-icons/ri';
import {FaSpaceShuttle} from 'react-icons/fa';
import {GiSpaceSuit} from 'react-icons/gi';
import {BiWorld} from 'react-icons/bi';
import {MdOutlineSportsSoccer} from 'react-icons/md';
import './header.scss'
import {useEffect, useState} from "react";


const Header = (props) => {
    const [active, setActive] = useState(false)
    const [icons, setIcons] = useState({})
    useEffect(() => {
        switch (props.theme) {
            case 'spacing-theme':
                setIcons({
                    'pierre': <RiAliensFill/>,
                    'stack': <FaSpaceShuttle/>,
                    'mission': <GiSpaceSuit/>,
                    'contact': <BiWorld/>
                })
        }
    }, [props.theme])

    return (
        <>
            <header>
                <div className="btn-theme">
                    <ol>
                        <li>
                            <button onClick={() => setActive(!active)}><FontAwesomeIcon icon={faPalette}/></button>
                        </li>
                        <div className={active ? "menu active-flex" : "menu"}>
                            <li>
                                <button>
                                    <FaSpaceShuttle/>
                                    Space
                                </button>
                            </li>
                            <li>
                                <button>
                                    <MdOutlineSportsSoccer/>
                                    Sport
                                </button>
                            </li>
                        </div>

                    </ol>
                </div>
                <nav className="spacing">
                    <ul>
                        <li>
                            <button onClick={() => props.setRouter('about')}>
                                {icons.pierre}
                                <p>Pierre</p>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => props.setRouter('stack')}>
                                {icons.stack}
                                <p>Stack</p>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => props.setRouter('mission')}>
                                {icons.mission}
                                <p>Missions</p>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => props.setRouter('contact')}>
                                {icons.contact}
                                <p>Contact</p>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header
