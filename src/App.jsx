import {useState} from 'react'
import './App.scss'
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
    const [router, setRouter] = useState('about');
    return (
        <div className={"layout"}>
            <Header router={router} setRouter={setRouter}/>
            <Content router={router}/>
        </div>
    )
}

export default App
