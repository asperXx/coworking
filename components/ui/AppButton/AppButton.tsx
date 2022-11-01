import styles from './AppButton.module.scss';

interface AppButtonProps {
  className?: string;
  label: string;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
  [x: string]: any;
}

const AppButton = ({
  className,
  label,
  children,
  color,
  ...attrs
}: AppButtonProps) => {
  if (!color) {
    color = 'primary';
  }
  console.log(styles);
  const currentClassName = `${styles.button} ${styles[`button_${color}`]}${
    className ? ` ${className}` : ''
  }`;
  return (
    <button
      {...attrs}
      className={currentClassName}
    >
      {children ? (
        children
      ) : (
        <span className={styles['button__label']}>{label}</span>
      )}
    </button>
  );
};

export default AppButton;
