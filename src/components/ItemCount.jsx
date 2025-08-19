import { useState } from "react";

export default function ItemCount({ stock = 1, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);

  const increment = () => setCount(c => Math.min(stock, c + 1));
  const decrement = () => setCount(c => Math.max(1, c - 1));

  const handleAdd = () => {
    onAdd(count);
    setAdded(true);
  };

  if (stock <= 0) return <p style={{ color: "red" }}>Producto sin stock</p>;

  return (
    <div>
      {!added ? (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
          <button onClick={handleAdd} style={{ marginTop: 8 }}>Agregar al carrito</button>
        </>
      ) : (
        <p style={{ color: "green" }}>Agregado: {count} unidad(es)</p>
      )}
    </div>
  );
}
