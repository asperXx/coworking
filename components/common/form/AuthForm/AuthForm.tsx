import { useState } from 'react';

import AppButton from '@ui/AppButton/AppButton';
import AppInput from '@ui/AppInput/AppInput';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
  interface AuthFormData {
    email: string;
    password: string;
  }

  const initialFormData: AuthFormData = {
    email: '',
    password: '',
  };

  const onFormSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  const [form, setForm] = useState(initialFormData);

  const onChange = (field: keyof AuthFormData, value: string) => {
    setForm(prevForm => ({ ...prevForm, [field]: value }));
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
            className={styles['auth__input']}
            type='email'
            autoComplete='username'
            required={true}
            placeholder='example@gmail.com'
            label='Email'
            onChange={(value: string) => onChange('email', value)}
          />
          <AppInput
            className={styles['auth__input']}
            type='password'
            autoComplete='current-password'
            required={true}
            placeholder='●●●●●●●●'
            label='Password'
            onChange={(value: string) => onChange('password', value)}
          />
        </div>
        <div className={styles['auth__controls']}>
          <AppButton
            label='Continue'
            className={styles['auth__button']}
            type='submit'
            style={{ width: '100%' }}
          />
          <AppButton
            label='Sign up'
            className={styles['auth__button']}
            color='secondary'
            style={{ width: '100%' }}
          />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
