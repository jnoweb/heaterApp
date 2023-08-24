import TemperatureDisplay from './components/TemperatureDisplay';
import styles from './App.module.css';

const temperatureData = {
  temperature: 7,
  maxTemperature: 180,
  minTemperature: 0,
};

function App() {
  return (
    <div className={styles.app}>
      <h1>Temperature Display</h1>
     <TemperatureDisplay {...temperatureData}/>
    </div>
  );
}

export default App;
