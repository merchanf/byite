import { FC } from 'react';
import cx from 'classnames';
import { PersonWalking, CarSide } from '@icons/index';
import Paragraph from '../Paragraph/Paragraph';
import styles from './DistanceCalculator.module.scss';

interface IDistanceCalculatorProps {
  radius: number;
  className?: string;
}

const DistanceCalculator: FC<IDistanceCalculatorProps> = ({
  className,
  radius,
}) => {
  const roundedRadius = Number.isInteger(radius / 1000)
    ? String(radius / 1000)
    : (radius / 1000).toFixed(1);

  return (
    <Paragraph className={cx(className, styles.DistanceCalculator)}>
      {radius < 1000 ? `${radius} m` : `${roundedRadius} km`}
      {radius <= 1000 ? (
        <span className={styles.DistanceCalculator__Paragraph}>
          &#40; <PersonWalking />
          {` ~ ${Math.round((radius * 60) / 4828)}min)`}
        </span>
      ) : (
        <span className={styles.DistanceCalculator__Paragraph}>
          &#40; <CarSide />
          {` ~ ${Math.round((radius * 60) / 30000)}min)`}
        </span>
      )}
    </Paragraph>
  );
};

export default DistanceCalculator;
