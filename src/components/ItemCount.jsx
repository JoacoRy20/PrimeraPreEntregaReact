import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(prev => prev + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={increment}>+</button>
      <br />
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
