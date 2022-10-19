import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { gMapsInstanceAtom, firebaseAppAtom } from '@recoil/index';
import { routes } from '@constants/index';

const { BASE } = routes;

const withSession = <T extends JSX.IntrinsicAttributes>(
  View: ComponentType<T>
) => {
  const displayName = View.displayName || View.name || 'Component';

  const RedirectToBase = (props: T) => {
    const gMapsInstance = useRecoilValue(gMapsInstanceAtom);
    const firebaseApp = useRecoilValue(firebaseAppAtom);

    return !gMapsInstance || !firebaseApp ? (
      <Navigate to={BASE} replace />
    ) : (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <View {...(props as T)} />
    );
  };

  RedirectToBase.displayName = `withTheme(${displayName})`;
  return RedirectToBase;
};

export default withSession;
