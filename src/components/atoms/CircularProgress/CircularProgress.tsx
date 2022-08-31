import { FC } from 'react';
import CP from '@mui/material/CircularProgress';

import { colors } from '@constants/index';

const { oldBurgundy } = colors;

const CircularProgress: FC = () => {
  return (
    <CP
      sx={{
        color: oldBurgundy[500],
      }}
      thickness={6}
    />
  );
};

export default CircularProgress;
