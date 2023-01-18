import { useState, ReactNode, useCallback, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { SliderValueLabelProps } from '@mui/material/Slider';
import MuiSlider from './MuiSlider';

interface SliderProps {
  className?: string;
  value: number;
  onChange: (newValue: number) => void;
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

const Slider = ({
  className,
  value,
  onChange,
  ariaLabelledby,
  min,
  max,
  marks,
  step,
  valueLabelFormat,
  calculateValue,
}: SliderProps) => {
  const [innerValue, setInnerValue] = useState<number>(value);

  const handleChange = useCallback((_: Event, newValue: number | number[]) => {
    setInnerValue(newValue as number);
    onChange(newValue as number);
  }, []);

  useEffect(() => {
    console.log('Slider', {
      innerValue,
    });
  }, [innerValue]);

  return (
    <div className={className}>
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
