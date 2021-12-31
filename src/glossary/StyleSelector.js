import * as constants from '../base/constant';
import './StyleSelector.css';

export function StyleSelector(props) {
  return (
    <div className="style-selector" onChange={event => props.setStyle(event.target.value)}>
      <input type="radio"
             value={constants.TARASK_TAG}
             name="style"
             defaultChecked={true}
             onChange={()=>{}}/>{constants.TARASK_TAG}
      <input type="radio"
             value={constants.NARKAM_TAG}
             name="style"
             checked={props.style===constants.NARKAM_TAG}
             onChange={()=>{}}/>{constants.NARKAM_TAG}
      <input type="radio"
             value={constants.LACINK_TAG}
             name="style"
             checked={props.style===constants.LACINK_TAG}
             onChange={()=>{}}/>{constants.LACINK_TAG}
    </div>
  );
}