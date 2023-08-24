import React from 'react';
import styles from './TemperatureDisplay.module.css';

interface TemperatureDisplayProps {
  temperature: number;
  maxTemperature: number;
  minTemperature: number;
}

const TemperatureDisplay: React.FC<TemperatureDisplayProps> = (props) => {
  const { temperature, maxTemperature, minTemperature } = props;

  if(temperature > maxTemperature || temperature < minTemperature) {
    // Add a warning message displayed when the temperature is out of range
    return (
      <div className={styles.temperatureDisplay}>
        <p className={styles['temperatureDisplay__currentTemperature']}>
          Temperature out of range
        </p>
      </div>
    );
  }

  const DEGREE_360 = 360;
  const range = maxTemperature + minTemperature;
  const angle = DEGREE_360 / range;
  const offset = temperature * angle;

  return (
    <div className={styles.temperatureDisplay}>
      <div className={styles['temperatureDisplay__circle']}>
        <div style={{ transform: `translate(-50%, -100%) rotate(${offset + 180}deg)`}}/>
      </div>
      <p className={styles['temperatureDisplay__currentTemperature-text']}>
        {temperature}°C
      </p>
    </div>
  );
};

export default TemperatureDisplay;
