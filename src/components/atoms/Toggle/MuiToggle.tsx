import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { colors } from '@constants/index';

const { deepChampagne } = colors;

const MuiToggle = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: deepChampagne[500],
    '&:hover': {
      backgroundColor: alpha(
        deepChampagne[500],
        theme.palette.action.hoverOpacity
      ),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: deepChampagne[600],
  },
}));

export default MuiToggle;
