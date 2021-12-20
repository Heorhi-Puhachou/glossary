import ReactDOM from 'react-dom';
import './base/Tab.css';
import Tabs from './base/Tabs';
import Glossary from './glossary/Glossary';
import StyleGuide from './styleguide/StyleGuide';
import LinksPage from './links/LinksPage';

ReactDOM.render(
  <div>
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
  </div>,
  document.getElementById('root'),
);
