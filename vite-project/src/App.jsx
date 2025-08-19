import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';
import './index.css';

function App() {
  return (
    <>
      <NavBar />
      <main style={{ padding: 20, maxWidth: 1000, margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
