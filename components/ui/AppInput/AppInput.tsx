import { getRandomString } from '@/utils/string';

import styles from './AppInput.module.scss';

interface AppInputProps {
  inputId?: string;
  label?: string;
  className?: string;
  [x: string]: any;
}

const AppInput = (
  { inputId, label, className, ...attrs }: AppInputProps = {
    inputId: '',
    label: 'input',
    type: 'text',
  },
) => {
  if (!inputId) {
    inputId = getRandomString();
  }
  return (
    <div
      suppressHydrationWarning={true}
      className={`${styles.input}${className ? ` ${className}` : ''}`}
    >
      <input
        className={styles['input__field']}
        id={inputId}
        {...attrs}
      />
      <label
        className={styles['input__label']}
        htmlFor={inputId}
      >
        {label}
      </label>
    </div>
  );
};

export default AppInput;
