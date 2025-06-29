import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={{ background: '#ccc', padding: '10px' }}>
      <h2>Mi Tienda</h2>
      <CartWidget />
    </nav>
  );
}

export default NavBar;