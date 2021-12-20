import Tabs from './Tabs';
import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';

function Base() {
  return (<div>
    <h1>Таварыства беларускіх перакладчыкаў</h1>
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
    </Tabs>
  </div>);
}

export default Base;