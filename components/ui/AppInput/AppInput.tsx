import styles from './AppInput.module.scss';

const AppInput = ({ attrs, inputId, label }) => {
  return (
    <div className={styles.input}>
      <label
        className={styles['input__label']}
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        className={styles['input__field']}
        id={inputId}
        {...attrs}
      />
    </div>
  );
};

export default AppInput;
