import { FC, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { SliderValueLabelProps } from '@mui/material/Slider';
import MuiSlider from './MuiSlider';

interface SliderProps {
  className?: string;
  value: number;
  onChange: (newValue: number | number[]) => void;
  ariaLabelledby?: string;
}

const ValueLabelComponent = (props: SliderValueLabelProps) => {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};

function valueLabelFormat(value: number) {
  if (value < 1) {
    return `${value * 1000} m`;
  }
  return `${value} km`;
}

function calculateValue(value: number) {
  if (value <= 10) {
    return value / 10;
  }
  return value - 9;
}

const Slider: FC<SliderProps> = ({ value, onChange, ariaLabelledby }) => {
  const [innerValue, setInnerValue] = useState<number>(value);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setInnerValue(newValue as number);
    onChange(newValue);
  };

  return (
    <MuiSlider
      valueLabelDisplay="auto"
      value={innerValue}
      slots={{
        valueLabel: ValueLabelComponent,
      }}
      scale={calculateValue}
      onChange={handleChange}
      aria-labelledby={ariaLabelledby}
      valueLabelFormat={valueLabelFormat}
      min={1}
      step={1}
      max={19}
    />
  );
};

export default Slider;
