import * as constants from '../base/constant';
import './StyleSelector.css';

export function StyleSelector(props) {
  return (
    <div className="style-selector" onChange={event => props.setStyle(event.target.value)}>
      <input type="radio" value={constants.TARASK_TAG} name="style"
             defaultChecked={true} />{constants.TARASK_TAG}
      <input type="radio" value={constants.NARKAM_TAG} name="style"
             defaultChecked={false} />{constants.NARKAM_TAG}
      <input type="radio" value={constants.LACINK_TAG} name="style"
             defaultChecked={false} />{constants.LACINK_TAG}
    </div>
  );
}