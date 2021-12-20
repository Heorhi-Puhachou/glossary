import { Record } from './Record';
import { PaginationPanel } from './PaginationPanel';
import Card from '../base/Card';

export function RecordsBlock(props) {

  const startIndex = (props.currentPage - 1) * props.countPerPage;
  const endIndex = startIndex + props.countPerPage;

  const pages = Math.floor(props.filteredGlosses.length / props.countPerPage)
    + (props.filteredGlosses.length % props.countPerPage > 0 ? 1 : 0);
  return (
    <div>
      <Card>
        <ol>{props.filteredGlosses.slice(startIndex, endIndex).map((item) => Record(item, props.style))}</ol>
      </Card>
      <PaginationPanel currentPage={props.currentPage} pages={pages} setCurrentPage={props.setCurrentPage} />
    </div>
  )
    ;
}