import { useState } from 'react';

import { Icon } from '@/types/common';

import AppButton from '@ui/AppButton/AppButton';
import AppInput from '@ui/AppInput/AppInput';
import LockIcon from '@ui/icons/lock';
import MailIcon from '@ui/icons/mail';
import VisibilityIcon from '@ui/icons/visibility';
import VisibilityOffIcon from '@ui/icons/visibilityOff';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const onFormSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify({ email, password }, null, 2));
  };

  const [passwordInputType, setPasswordInputType] =
    useState<string>('password');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const changePasswordInputType = () => {
    setPasswordInputType(prev => {
      return prev === 'password' ? 'text' : 'password';
    });
  };

  return (
    <div className={styles.auth}>
      <form
        className={styles['auth__form']}
        onSubmit={onFormSubmit}
      >
        <div className={styles['auth__header']}>
          <h2 className={styles['auth__title']}>Authorization</h2>
        </div>
        <div className={styles['auth__content']}>
          <AppInput
            key='email'
            className={styles['auth__input']}
            type='email'
            autoComplete='username'
            required={true}
            placeholder='example@gmail.com'
            label='Email'
            icons={{ prependInner: <MailIcon /> }}
            onChange={(value: string) => setEmail(value)}
          />
          <AppInput
            key='password'
            className={styles['auth__input']}
            type={passwordInputType}
            autoComplete='current-password'
            required={true}
            placeholder='●●●●●●●●'
            label='Password'
            icons={{
              prependInner: <LockIcon />,
              appendInner:
                passwordInputType === 'password' ? (
                  <VisibilityIcon onClick={changePasswordInputType} />
                ) : (
                  <VisibilityOffIcon onClick={changePasswordInputType} />
                ),
            }}
            onChange={(value: string) => setPassword(value)}
            onAppendInnerClick={changePasswordInputType}
          />
        </div>
        <div className={styles['auth__controls']}>
          <AppButton
            label='Continue'
            className={styles['auth__button']}
            type='submit'
          />
          <AppButton
            label='Sign up'
            className={styles['auth__button']}
            color='secondary'
          />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
