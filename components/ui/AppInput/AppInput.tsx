import { getRandomString } from '@/utils/string';

import styles from './AppInput.module.scss';

interface AppInputProps {
  inputId?: string;
  label?: string;
  className?: string;
  onChange: (value: string) => void;
  [x: string]: any;
}

const AppInput = (
  { inputId, label, className, onChange, ...attrs }: AppInputProps = {
    inputId: '',
    label: 'input',
    type: 'text',
    onChange: () => {},
  },
) => {
  if (!inputId) {
    inputId = getRandomString();
  }
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);
  return (
    <div
      suppressHydrationWarning={true}
      className={`${styles.input}${className ? ` ${className}` : ''}`}
    >
      <input
        className={styles['input__field']}
        id={inputId}
        onChange={onInputChange}
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
