import './content.scss'
import Me from "../me/Me";
import Article from "../article/Article";

const Content = (props) => {
    return (
        <>
            <div className="content">
                <Me/>
                <Article router={props.router}/>
            </div>
        </>
    )
}
export default Content
