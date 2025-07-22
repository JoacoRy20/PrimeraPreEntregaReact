import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const mockProducts = [
  { id: "1", name: "Zapatillas", price: 150, category: "calzado" },
  { id: "2", name: "Campera", price: 300, category: "ropa" },
  { id: "3", name: "Gorra", price: 100, category: "accesorios" },
  { id: "4", name: "Botas", price: 250, category: "calzado" },
];

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 500);
    });

    fetchData.then(data => {
      const filtered = categoryId
        ? data.filter(p => p.category === categoryId)
        : data;

      setProducts(filtered);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <section>
      {greeting && <h3>{greeting}</h3>}
      <ItemList products={products} />
    </section>
  );
}

export default ItemListContainer;
