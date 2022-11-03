import { cloneElement } from 'react';

import { InputIconPositions } from '@/types/common';

import styles from './AppInput.module.scss';

export interface AppInputProps {
  label?: string;
  className?: string;
  children?: React.ReactNode;
  icons?: InputIconPositions;
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
      {hasPrependInnerIcon &&
        cloneElement(icons.prependInner, {
          className: `${styles['input__icon']} ${
            styles['input__icon_prepend-inner']
          } ${icons.prependInner.props?.className || ''}`,
        })}
      {hasAppendInnerIcon &&
        cloneElement(icons.appendInner, {
          className: `${styles['input__icon']} ${
            styles['input__icon_append-inner']
          } ${icons.appendInner.props?.className || ''}`,
        })}
    </div>
  );
};

export default AppInput;
