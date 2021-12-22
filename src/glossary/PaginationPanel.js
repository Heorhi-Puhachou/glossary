import './PaginationPanel.css';

export function PaginationPanel(props) {
  const pagesCount = Math.floor(props.filteredGlosses.length / props.countPerPage)
    + (props.filteredGlosses.length % props.countPerPage > 0 ? 1 : 0);

  return (
    <div className="pagination-card">
      <button className="pagination-button"
              disabled={props.currentPage === 1}
              onClick={() => props.setCurrentPage(props.currentPage - 1)}>
        ←
      </button>
      <div className="pagination-text">
        {'ст. ' + props.currentPage + ' з ' + pagesCount}
      </div>
      <button className="pagination-button"
              disabled={props.currentPage === pagesCount}
              onClick={() => props.setCurrentPage(props.currentPage + 1)}>
        →
      </button>
    </div>
  );
}