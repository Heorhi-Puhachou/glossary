import { useState } from 'react';
import narTarConvert from './NarTarConverter';
import tarNarConvert from './TarNarConverter';
import './Converter.css';

function Converter() {

  const [tarashkevicaText, setTarashkevicaText] = useState('Тарашкевіца');
  const [narkamaukaText, setNarkamaukaText] = useState('Наркамаўка');

  return (
    <table>
      <tbody>
      <tr>
        <td className="cell-with-value">
          <textarea value={tarashkevicaText} onChange={value => setTarashkevicaText(value.target.value)} />
        </td>
        <td className="cell-stub"/>
        <td className="cell-with-value">
          <textarea value={narkamaukaText} onChange={value => setNarkamaukaText(value.target.value)} />
        </td>
      </tr>
      <tr>
        <td className="cell-with-value">
          <button onClick={() => setNarkamaukaText(tarNarConvert(tarashkevicaText))}>
            Канвертацыя тарашкевіцы ў наркамаўку
          </button>
        </td>
        <td className="cell-stub"/>
        <td className="cell-with-value">
          <button onClick={() => setTarashkevicaText(narTarConvert(narkamaukaText))}>
            Канвертацыя наркамаўкі ў тарашкевіцу
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  );
}

export default Converter;