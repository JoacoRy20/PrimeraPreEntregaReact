import ItemCount from './ItemCount';

function ItemDetail({ name, description, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <strong>Precio: ${price}</strong>
      <ItemCount stock={5} initial={1} onAdd={(qty) => alert(`Agregado ${qty} al carrito`)} />
    </div>
  );
}

export default ItemDetail;
