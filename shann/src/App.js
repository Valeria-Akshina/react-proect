import './App.css';
import { FirstMain } from './components/FirstMain';
import { Header } from './components/Header';
import { LayoutGeneral } from './components/LayoutGeneral';

function App() {
  return (
    <div className="App">
      <LayoutGeneral>
        <Header/>
        <FirstMain/>
      </LayoutGeneral>
    </div>
  );
}

export default App;
