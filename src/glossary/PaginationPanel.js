import Card from '../base/Card';
import './PaginationPanel.css';

export function PaginationPanel(props) {
  return (
    <Card className="pagination-card">
      <button className="pagination-button"
              disabled={props.currentPage === 1}
              onClick={() => props.setCurrentPage(props.currentPage - 1)}>
        Папярэдняя
      </button>
      <div className="pagination-text">
        {'Старонка ' + props.currentPage + ' з ' + props.pages}
      </div>
      <button className="pagination-button"
              disabled={props.currentPage === props.pages}
              onClick={() => props.setCurrentPage(props.currentPage + 1)}>
        Наступная
      </button>
    </Card>
  );
}