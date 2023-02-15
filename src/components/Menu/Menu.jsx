import { NavLink, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Menu;
