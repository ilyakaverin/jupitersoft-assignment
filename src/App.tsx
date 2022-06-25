import React from 'react';
import Header from './views/Header/Header';
import Main from './views/Main/Main';
import database from './database';

function App() {
  return (
    <>
      <Header
        name="Portfolio"
        description="Agency provides a full service range including technical skills, design, business understanding."
      />
      <Main db={database} />
    </>
  );
}

export default App;
