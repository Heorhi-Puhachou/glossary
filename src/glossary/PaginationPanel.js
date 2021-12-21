import Card from '../base/Card';
import './PaginationPanel.css';

export function PaginationPanel(props) {
  return (
    <Card>
      <table>
        <tr>
          <td>
            <button disabled={props.currentPage === 1} onClick={() => props.setCurrentPage(props.currentPage - 1)}>
              Папярэдняя
            </button>
          </td>
          <td>
            <div className="centered-text">{'Старонка ' + props.currentPage + ' з ' + props.pages}</div>
          </td>
          <td>
            <button disabled={props.currentPage === props.pages}
                    onClick={() => props.setCurrentPage(props.currentPage + 1)}>
              Наступная
            </button>
          </td>
        </tr>
      </table>


    </Card>
  );
}