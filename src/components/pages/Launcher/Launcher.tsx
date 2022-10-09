import { FC, useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Title } from '@components/atoms/index';
import hydrateSelector from '@recoil/hydrate';
import styles from './Launcher.module.scss';

const Launcher: FC = () => {
  const [text, setText] = useState('loading...');
  const loaded = useRecoilValue(hydrateSelector);

  useEffect(() => {
    if (loaded) {
      setText('loaded');
    }
  }, [loaded]);

  return (
    <div className={styles.Launcher}>
      <Title>{text}</Title>
    </div>
  );
};

export default Launcher;
