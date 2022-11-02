import { useState } from 'react';

import { Icon } from '@/types/common';

import AppButton from '@ui/AppButton/AppButton';
import AppInput from '@ui/AppInput/AppInput';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const onFormSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  const [passwordInputType, setPasswordInputType] =
    useState<string>('password');

  const changePasswordInputType = () => {
    setPasswordInputType(prev => {
      return prev === 'password' ? 'text' : 'password';
    });
  };

  const form = {
    email: '',
    password: '',
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
            icons={{ prependInner: Icon.mail }}
            onChange={(value: string) => (form.email = value)}
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
              prependInner: Icon.lock,
              appendInner:
                passwordInputType === 'password'
                  ? Icon.visibility
                  : Icon.visibilityOff,
            }}
            onChange={(value: string) => (form.password = value)}
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
