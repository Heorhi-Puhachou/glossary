import { Record } from './Record';
import './RecordsBlock.css';

export function RecordsBlock(props) {

  const startIndex = (props.currentPage - 1) * props.countPerPage;
  const endIndex = startIndex + props.countPerPage;

  return (
      <div className="records">
        {props.filteredGlosses.slice(startIndex, endIndex).map((item) => Record(item, props.style))}
      </div>
  )
    ;
}