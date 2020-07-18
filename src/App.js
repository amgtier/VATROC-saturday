import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng) => {
  	i18n.changeLanguage(lng);
  }

  return (
    <div className="App">
      <div>
      	<button onClick={() => changeLanguage('en')}>EN</button>
      	<button onClick={() => changeLanguage('tw')}>TW</button>
      </div>
      <h1>{ t('Welcome to React') }</h1>
    </div>
  );
}

export default App;
