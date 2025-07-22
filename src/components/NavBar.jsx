import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={{ background: '#ccc', padding: '10px' }}>
      <h2><Link to="/">Mi Tienda</Link></h2>
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
        <li><Link to="/category/calzado">Calzado</Link></li>
        <li><Link to="/category/ropa">Ropa</Link></li>
        <li><Link to="/category/accesorios">Accesorios</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
