import { useState } from 'react';
import narTarConvert from './NarTarConverter';
import tarNarConvert from './TarNarConverter';

function Converter() {

  const [tarashkevicaText, setTarashkevicaText] = useState('Тарашкевіца');
  const [narkamaukaText, setNarkamaukaText] = useState('Наркамаўка');

  return (<table>
      <tr>
        <td>
          <textarea value={tarashkevicaText} onChange={value => setTarashkevicaText(value.target.value)} />
        </td>
        <td>
          <textarea value={narkamaukaText} onChange={value => setNarkamaukaText(value.target.value)} />
        </td>
      </tr>
      <tr>
        <td>
          <button onClick={() => setNarkamaukaText(tarNarConvert(tarashkevicaText))}>
            Канвертацыя тарашкевіцы ў наркамаўку
          </button>
        </td>
        <td>
          <button onClick={() => setTarashkevicaText(narTarConvert(narkamaukaText))}>
            Канвертацыя наркамаўкі ў тарашкевіцу
          </button>
        </td>
      </tr>
    </table>
  );
}

export default Converter;