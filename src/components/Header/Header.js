import { Link } from 'react-router-dom';

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.head}>
      <ul>
        <Link to="/"><li>Products</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/authentication"><li>Login/Signup</li></Link>
      </ul>
    </header>
  );
}

export default Header;
