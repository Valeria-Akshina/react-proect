import './App.css';
import { FirstMain } from './components/FirstMain';
import { Header } from './components/Header';
import { LayoutGeneral } from './components/LayoutGeneral';
import { ElectricVehicleTechnology } from './components/ElectricVehicleTechnology'
import { Engine } from './components/Engine';

function App() {
  return (
    <div className="App">
      <LayoutGeneral>
        <Header/>
        <FirstMain/>
        <ElectricVehicleTechnology/>
        <Engine/>
      </LayoutGeneral>
    </div>
  );
}

export default App;
