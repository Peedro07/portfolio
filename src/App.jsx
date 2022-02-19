import {useEffect, useState} from 'react'
import './App.scss'
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
    const [router, setRouter] = useState('about');
    const [theme, setTheme] = useState('spacing-theme');


    return (
        <div className={"app " + theme}>
            <div className={"layout"}>
                <Header router={router} setRouter={setRouter} theme={theme} setTheme={setTheme}/>
                <Content router={router} theme={theme}/>
            </div>
        </div>
    )
}

export default App
