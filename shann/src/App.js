import './App.css';
import { FirstMain } from './components/FirstMain';
import { Header } from './components/Header';
import { LayoutGeneral } from './components/LayoutGeneral';
import { ElectricVehicleTechnology } from './components/ElectricVehicleTechnology'
import { Engine } from './components/Engine';
import { Telemetry } from './components/Telemetry';
import { Catalog } from './components/Catalog';
import { PhotoGallery } from './components/Photogallery';

function App() {
  return (
    <div className="App">
      <LayoutGeneral>
        <Header/>
        <FirstMain/>
        <ElectricVehicleTechnology/>
        <Engine/>
        <Telemetry/>
        <Catalog/>
        <PhotoGallery/>
      </LayoutGeneral>
    </div>
  );
}

export default App;
