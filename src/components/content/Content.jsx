import './content.scss'
import Me from "../me/Me";
import Article from "../article/Article";

const Content = (props) => {
    return (
        <>
            <div className="content">
                <Me theme={props.theme}/>
                <Article router={props.router} theme={props.theme}/>
            </div>
        </>
    )
}
export default Content
