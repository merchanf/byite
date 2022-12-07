import { FC, useState } from 'react';
import { Slider } from '@components/atoms/index';
import { PersonDress, PersonWalking, CarSide } from '@components/icons/Icons';

interface DistanceSliderProps {
  className?: string;
  value: number | number[];
  onChange: (newValue: number | number[]) => void;
}

const valueLabelFormat = (value: number) => {
  if (value < 1) {
    return `${value * 1000} m`;
  }
  return `${value} km`;
};

const calculateValue = (value: number) => {
  if (value <= 10) {
    return value / 10;
  }
  return value - 9;
};

const DistanceSlider: FC<DistanceSliderProps> = ({ value }) => {
  const [innerValue, setValue] = useState<number | number[]>(value);
  const marks = [
    {
      value: 1,
      label: <PersonDress />,
    },
    {
      value: 10,
      label: <PersonWalking />,
    },
    {
      value: 19,
      label: <CarSide />,
    },
  ];

  return (
    <Slider
      value={innerValue}
      marks={marks}
      calculateValue={calculateValue}
      valueLabelFormat={valueLabelFormat}
      onChange={setValue}
      min={1}
      max={19}
      step={1}
    />
  );
};

export default DistanceSlider;
