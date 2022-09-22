import { FC, useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Title } from '@components/atoms/index';
import firebaseInstanceState from '@recoil/firebase';
import styles from './Launcher.module.scss';

const Launcher: FC = () => {
  const [text, setText] = useState('loading...');
  const { loaded } = useRecoilValue(firebaseInstanceState);

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
