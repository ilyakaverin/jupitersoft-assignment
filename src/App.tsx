import Header from './views/Header/Header.tsx';
import Main from './views/Main/Main.tsx';
import database from './database';

function App() {
  const text = 'Agency provides a full service range including technical skills, design, business understanding.';
  return (
    <>
      <Header name="Portfolio" description={text} />
      <Main db={database} />
    </>
  );
}

export default App;
