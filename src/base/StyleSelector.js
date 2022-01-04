import * as constants from './constant';
import './StyleSelector.css';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

export function StyleSelector() {

    const style = useSelector(state => state.style);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


    const onChangeStyle = (event) => {
        const newStyle = event.target.value;
        const currentPath = location.pathname;
        const newLocation = currentPath.replace(style, newStyle) + location.search;
        navigate(newLocation);
        dispatch({type: newStyle});
    };

    return (
        <div className="style-selector" onChange={onChangeStyle}>
            <input type="radio"
                   value={constants.TARASK_TAG}
                   name="style"
                   defaultChecked={style === constants.TARASK_TAG}
                   onChange={() => {
                   }}/>{constants.TARASK_TAG}
            <input type="radio"
                   value={constants.NARKAM_TAG}
                   name="style"
                   checked={style === constants.NARKAM_TAG}
                   onChange={() => {
                   }}/>{constants.NARKAM_TAG}
            <input type="radio"
                   value={constants.LACINK_TAG}
                   name="style"
                   checked={style === constants.LACINK_TAG}
                   onChange={() => {
                   }}/>{constants.LACINK_TAG}
        </div>
    );
}