import Item from "./Item.jsx";

export default function ItemList({ products }) {
  return (
    <div className="item-grid">
      {products.map(prod => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}
