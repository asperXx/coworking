import { cloneElement } from 'react';

import styles from './AppInput.module.scss';

interface AppInputProps {
  label?: string;
  className?: string;
  children?: React.ReactNode;
  icons?: any;
  [x: string]: any;
}

const AppInput = ({
  label,
  className,
  icons,
  onChange,
  onAppendInnerClick,
  ...props
}: AppInputProps) => {
  const hasPrependInnerIcon = Boolean(icons.prependInner);
  const hasAppendInnerIcon = Boolean(icons.appendInner);
  const currentClassName = [
    styles.input,
    className,
    hasPrependInnerIcon && styles['input_prepend-inner'],
    hasAppendInnerIcon && styles['input_append-inner'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={currentClassName}>
      <input
        className={styles['input__field']}
        onChange={e => onChange(e.target.value)}
        {...props}
      />
      <label className={styles['input__label']}>{label}</label>
      {hasPrependInnerIcon
        ? cloneElement(icons.prependInner, {
            className: `${styles['input__icon']} ${styles['input__icon_prepend-inner']}`,
          })
        : ''}
      {hasAppendInnerIcon
        ? cloneElement(icons.appendInner, {
            className: `${styles['input__icon']} ${styles['input__icon_append-inner']}`,
          })
        : ''}
    </div>
  );
};

export default AppInput;
