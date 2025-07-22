import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="item-grid">
      {products.map(prod => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default ItemList;
