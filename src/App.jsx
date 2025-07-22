import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
