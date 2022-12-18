import { FC, ChangeEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  userUidAtom,
  firstNameAtom,
  lastNameAtom,
  emailAtom,
  nickNameAtom,
} from '@recoil/index';
import { user as userService } from '@services/index';
import { Title, TextButton } from '@components/atoms/index';
import { FormText } from '@components/molecules';
import { routes } from '@constants/index';
import { Layout } from '@components/templates/index';
import styles from './Whoami.module.scss';

const { SWIPE } = routes;

enum FormFields {
  name = 'name',
  lastName = 'lastName',
  email = 'email',
  nickname = 'nickname',
}

const Whoami: FC = () => {
  const [firstName, setFirstName] = useRecoilState(firstNameAtom);
  const [lastName, setLastName] = useRecoilState(lastNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [nickName, setNickName] = useRecoilState(nickNameAtom);
  const userUid = useRecoilValue(userUidAtom);

  const forms = {
    [FormFields.name]: setFirstName,
    [FormFields.lastName]: setLastName,
    [FormFields.email]: setEmail,
    [FormFields.nickname]: setNickName,
  };

  const navigate = useNavigate();

  const onChange = (
    formField: FormFields,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    forms[formField](e.target.value);
  };

  const handleOnClick = () => {
    navigate(SWIPE);
    userService.addInfo(firstName, lastName, email, nickName, userUid);
  };

  return (
    <Layout className={styles.Whoami}>
      <Title className={styles.Whoami__Title}>Cuéntanos quien eres!</Title>
      <div className={styles.Whoami__Form}>
        <span className={styles.Whoami__FullName}>
          <FormText
            label="Nombre(s)"
            placeholder="Radamel"
            name="name"
            required
            onChange={(value) => onChange(FormFields.name, value)}
          />
          <FormText
            label="Apellidos"
            placeholder="Falcao Garcia"
            name="name"
            required
            onChange={(value) => onChange(FormFields.lastName, value)}
          />
        </span>

        <FormText
          label="Correo electrónico"
          placeholder="radamel.falcao@fcf.com"
          name="name"
          type="email"
          required
          onChange={(value) => onChange(FormFields.email, value)}
        />
        <FormText
          label="Mis amigos me llaman..."
          placeholder="El tigre"
          name="name"
          required
          onChange={(value) => onChange(FormFields.nickname, value)}
        />
      </div>

      <TextButton className={styles.Whoami__Button} onClick={handleOnClick}>
        Búsquemos donde comer!
      </TextButton>
    </Layout>
  );
};

export default Whoami;
