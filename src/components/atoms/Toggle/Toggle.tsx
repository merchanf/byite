import { FC } from 'react';
import MuiToggle from './MuiToggle';

interface ToggleProps {
  className?: string;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: FC<ToggleProps> = ({ defaultChecked, onChange }) => {
  return <MuiToggle defaultChecked={defaultChecked} onChange={onChange} />;
};

export default Toggle;
