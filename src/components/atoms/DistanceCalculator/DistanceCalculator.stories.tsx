import DistanceCalculator from './DistanceCalculator';

export default {
  component: DistanceCalculator,
  title: 'molecules/Distance calculator',
};

export const Default = () => <DistanceCalculator radius={1000} />;

export const With10000 = () => <DistanceCalculator radius={10000} />;

export const With100 = () => <DistanceCalculator radius={100} />;
