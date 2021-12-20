import Card from '../base/Card';

export function PaginationPanel(props) {
  return (
    <Card>
      <button disabled={props.currentPage === 1} onClick={() => props.setCurrentPage(props.currentPage - 1)}>
        Папярэдняя
      </button>
      <div>{'Старонка ' + props.currentPage + ' з ' + props.pages}</div>
      <button disabled={props.currentPage === props.pages} onClick={() => props.setCurrentPage(props.currentPage + 1)}>
        Наступная
      </button>
    </Card>
  );
}