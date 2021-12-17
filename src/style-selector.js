import * as constants from './constant';

export function StyleSelector(props) {
  return (
    <div className="styles" onChange={props.onChangeStyle}>
      <input type="radio" value={constants.TARASK_TAG} name="style"
             checked={props.style === constants.TARASK_TAG} />{constants.TARASK_TAG}
      <input class="stub" />
      <input type="radio" value={constants.NARKAM_TAG} name="style" />{constants.NARKAM_TAG}
      <input class="stub" />
      <input type="radio" value={constants.LACINK_TAG} name="style" />{constants.LACINK_TAG}
    </div>
  );
}