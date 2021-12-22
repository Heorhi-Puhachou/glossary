import { useState } from 'react';
import narTarConvert from './logic/NarTarConverter';
import tarNarConvert from './logic/TarNarConverter';
import './Converter.css';
import * as constants from '../base/constant';
import { TAR_NAR_MODE } from '../base/constant';
import TarNarConverter from './logic/TarNarConverter';
import Card from '../base/Card';

function Converter() {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState();

  function convert() {
    if (mode === TAR_NAR_MODE) {
      setOutput(tarNarConvert(input));
    } else {
      setOutput(narTarConvert(input));
    }
  }

  return (
    <div className="base-con-panel">

      <Card className="converter-info">
        Канвертар пакуль не працуе (нармальна)
      </Card>

      <div className="converter-mode">
        <div className="mode-selector" onChange={event => setMode(event.target.value)}>
          <input type="radio" value={constants.TAR_NAR_MODE} name="mode"
                 defaultChecked={true} />be-tarask => be-acad1959
          <input type="radio" value={constants.NARKAM_TAG} name="mode"
                 defaultChecked={false} />be-acad1959 => be-tarask
        </div>
      </div>

      <Card className="converter-text">
        <div className="text-stub"></div>
        <div className="converter-textarea">
            <textarea placeholder="увядзіце тэкст для канвэртацыі" value={input}
                      onChange={value => setInput(value.target.value)} />
        </div>
        <div className="text-stub"></div>
        <div className="converter-textarea">
          <textarea placeholder="тут зьявяцца вынікі канвэртацыі" value={output} />
        </div>
        <div className="text-stub"></div>


      </Card>

      <div className="converter-button">
        <button onClick={() => convert()}>
          Канвэртацыя
        </button>
      </div>


    </div>
  );
}

export default Converter;