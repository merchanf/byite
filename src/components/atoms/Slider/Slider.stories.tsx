/* eslint-disable no-console */
import Slider from './Slider';

export default {
  component: Slider,
  title: 'atoms/Slider',
};

const onchange = (n: number | number[]) => {
  console.log(n);
};

export const Default = () => (
  <Slider value={30} onChange={onchange} min={0} max={100} step={10} />
);
