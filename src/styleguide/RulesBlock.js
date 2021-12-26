import Rule from "./Rule";
import "./RulesBlock.css"

const RulesBlock = (props) => {

    if (props.group) {
        return (
            <div className="rules-block">
                {props.group.records.map(record => Rule(record.description, record.example))}
            </div>
        );
    } else {
        return null;
    }
};

export default RulesBlock;