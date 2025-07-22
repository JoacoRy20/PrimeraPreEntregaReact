import { Link } from 'react-router-dom';

function Item({ id, name, price }) {
  return (
    <div className="item-card">
      <h4>{name}</h4>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
