import { useState } from 'react';
import { Slider } from '@components/atoms/index';
import { PersonDress, PersonWalking, CarSide } from '@components/icons/Icons';
import styles from './DistanceSlider.module.scss';

interface DistanceSliderProps {
  className?: string;
  value: number;
  onChange: (newValue: number) => void;
}

const valueLabelFormat = (value: number) => {
  if (value < 1000) {
    return `${value} m`;
  }
  return `${value / 1000} km`;
};

const calculateValue = (value: number) => {
  if (value <= 10) {
    return value * 100;
  }
  return (value - 9) * 1000;
};

const DistanceSlider = ({
  value,
  className,
  onChange,
}: DistanceSliderProps) => {
  const [innerValue, setValue] = useState<number>(value);

  const handleChange = (newValue: number) => {
    const calculatedValue = calculateValue(newValue);
    setValue(calculatedValue);
    onChange(calculatedValue);
  };

  const marks = [
    {
      value: 1,
      label: <PersonDress className={styles.Icon} />,
    },
    {
      value: 10,
      label: <PersonWalking className={styles.Icon} />,
    },
    {
      value: 19,
      label: <CarSide className={styles.Icon} />,
    },
  ];

  return (
    <Slider
      className={className}
      value={innerValue}
      marks={marks}
      calculateValue={calculateValue}
      valueLabelFormat={valueLabelFormat}
      onChange={handleChange}
      min={1}
      max={19}
      step={1}
    />
  );
};

export default DistanceSlider;
