import Diversity from '@/components/ui/icons/Diversity';

import styles from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__content']}>
        <a
          className={styles['header__logo']}
          href='/'
        >
          <Diversity />
          COWORKING
        </a>
      </div>
    </header>
  );
};

export default AppHeader;
