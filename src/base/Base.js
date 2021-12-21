import Tabs from './Tabs';
import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import Converter from '../converter/Converter';

function Base() {
  return (<div  id='base'>
    <h1>Таварыства перакладчыкаў (ТП)</h1>
    <Tabs>
      <div label="Гласарый">
        <Glossary />
      </div>
      <div label="Стайлгайд">
        <StyleGuide />
      </div>
      <div label="Карысныя спасылкі">
        <LinksPage />
      </div>
      <div label="Канвертар">
        <Converter />
      </div>
    </Tabs>
  </div>);
}

export default Base;