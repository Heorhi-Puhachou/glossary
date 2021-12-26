import Link from "./Link";
import "./LinksBlock.css"

const LinksBlock = (props) => {

    if (props.group) {
        return (
            <div>
                {props.group.links.map(link => Link(link.description, link.url))}
            </div>
        );
    } else {
        return null;
    }
};

export default LinksBlock;