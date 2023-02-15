import { NavLink } from 'react-router-dom';

// import styles from './menu.module.css';
import items from './items';

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to}>{text}</NavLink>
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default Menu;
