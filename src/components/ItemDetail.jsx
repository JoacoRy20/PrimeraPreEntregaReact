import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function ItemDetail({ product }) {
  const { addItem } = useCart();

  const onAdd = (qty) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock ?? 100
    }, qty);
  };

  return (
    <article>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Precio: ${product.price}</strong></p>
      <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      <div style={{ marginTop: 12 }}>
        <Link to="/">Volver al catálogo</Link>
      </div>
    </article>
  );
}
