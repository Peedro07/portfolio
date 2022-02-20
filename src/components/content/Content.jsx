import './content.scss'
import Profile from "../profile/Profile";
import Article from "../article/Article";

const Content = (props) => {
    return (
        <>
            <div className="content">
                <Profile/>
                <Article router={props.router}/>
            </div>
        </>
    )
}
export default Content
