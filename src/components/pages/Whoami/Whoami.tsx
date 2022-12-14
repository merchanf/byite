import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Title, TextButton } from '@components/atoms/index';
import { FormText } from '@components/molecules';
import { routes } from '@constants/index';
import { Layout } from '@components/templates/index';
import styles from './Whoami.module.scss';

const { SWIPE } = routes;

const Whoami: FC = () => {
  const navigate = useNavigate();

  return (
    <Layout className={styles.Whoami}>
      <Title>Cuéntanos quien eres!</Title>
      <div className={styles.Whoami__Form}>
        <span className={styles.Whoami__FullName}>
          <FormText
            label="Nombre(s)"
            placeholder="Radamel"
            name="name"
            required
          />
          <FormText
            label="Apellidos"
            placeholder="Falcao Garcia"
            name="name"
            required
          />
        </span>

        <FormText
          label="Correo electrónico"
          placeholder="radamel.falcao@fcf.com"
          name="name"
          type="email"
          required
        />
        <FormText
          label="Mis amigos me llaman..."
          placeholder="El tigre"
          name="name"
          required
        />
      </div>

      <TextButton
        className={styles.Whoami__Button}
        onClick={() => navigate(SWIPE)}
      >
        Búsquemos donde comer!
      </TextButton>
    </Layout>
  );
};

export default Whoami;
