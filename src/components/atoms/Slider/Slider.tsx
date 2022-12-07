import { FC, useState, ReactNode } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { SliderValueLabelProps } from '@mui/material/Slider';
import MuiSlider from './MuiSlider';

interface SliderProps {
  className?: string;
  value: number | number[];
  onChange: (newValue: number | number[]) => void;
  ariaLabelledby?: string;
  marks?: Array<{ label?: ReactNode; value: number }> | boolean;
  valueLabelFormat?: (value: number) => string;
  calculateValue?: (value: number) => number;
  min?: number;
  max?: number;
  step?: number;
}

const ValueLabelComponent = (props: SliderValueLabelProps) => {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};

const Slider: FC<SliderProps> = ({
  value,
  onChange,
  ariaLabelledby,
  min,
  max,
  marks,
  step,
  valueLabelFormat,
  calculateValue,
}) => {
  const [innerValue, setInnerValue] = useState<number | number[]>(value);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setInnerValue(newValue as number);
    onChange(newValue);
  };

  return (
    <div>
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
        min={min}
        step={step}
        max={max}
        marks={marks}
      />
    </div>
  );
};

export default Slider;
