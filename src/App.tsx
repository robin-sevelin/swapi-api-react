import './App.css';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { AppMain } from './components/AppMain';

function App() {
  return (
    <>
      <AppHeader content='Swapi Api' />
      <AppMain content='..lets search something' />
      <AppFooter content='footer' />
    </>
  );
}

export default App;
