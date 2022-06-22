import logo from './logo.svg';
import * as style from './App.module.scss';
// @ts-ignore
import Header from './views/Header/Header.tsx';
// @ts-ignore
import Main from './views/Main/Main.tsx';
import database from './database';





const App = () => {

  const text = "Agency provides a full service range including technical skills, design, business understanding."
  return (
    <>
  <Header name="Portfolio" description={text} />
  <Main database={database} />

    </>
  )
}

export default App;
