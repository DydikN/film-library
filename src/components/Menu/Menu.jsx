import { NavLink, Outlet } from 'react-router-dom';

import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles['nav__list']}>
              <li className={styles['nav__item']}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? styles['nav__link--current']
                      : styles['nav__link']
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className={styles['nav__item']}>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive
                      ? styles['nav__link--current']
                      : styles['nav__link']
                  }
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Menu;
