export function StyleSelector(props) {
  return (
    <div className="styles" onChange={props.onChangeStyle}>

      <input type="radio" value="be-tarask" name="gender" checked={props.style === 'be-tarask'} />be-tarask
      <input class="stub" />
      <input type="radio" value="be-1959acad" name="gender" />be-1959acad
      <input class="stub" />
      <input type="radio" value="lacinka" name="gender" />lacinka
    </div>
  );
}