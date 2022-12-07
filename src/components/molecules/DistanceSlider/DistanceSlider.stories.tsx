/* eslint-disable no-console */
import DistanceSlider from './DistanceSlider';

export default {
  component: DistanceSlider,
  title: 'molecules/Distance slider',
};

const onchange = (n: number | number[]) => {
  console.log(n);
};

export const Default = () => <DistanceSlider value={30} onChange={onchange} />;
