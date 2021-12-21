import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return (
    <div className="out-card">
      <div className={classes}>
        {props.children}
      </div>
    </div>);
}

export default Card;