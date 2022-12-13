import { FC } from 'react';
import MuiToggle from './MuiToggle';

interface ToggleProps {
  className?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: FC<ToggleProps> = ({ checked, onChange }) => {
  return <MuiToggle checked={checked} onChange={onChange} />;
};

export default Toggle;
