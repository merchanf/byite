import { FC, useState } from 'react';
import MuiSlider from '@mui/material/Slider';

interface SliderProps {
  className?: string;
  value: number;
  onChange: (newValue: number | number[]) => void;
  ariaLabelledby?: string;
}

const Slider: FC<SliderProps> = ({
  className,
  value,
  onChange,
  ariaLabelledby,
}) => {
  const [innerValue, setInnerValue] = useState<number>(value);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setInnerValue(newValue as number);
    onChange(newValue);
  };

  return (
    <MuiSlider
      value={innerValue}
      onChange={handleChange}
      aria-labelledby={ariaLabelledby}
    />
  );
};

export default Slider;
