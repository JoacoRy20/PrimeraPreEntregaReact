import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let q;
        if (categoriaId) {
          // 📌 Si hay categoría en la URL, filtramos
          q = query(collection(db, "productos"), where("categoria", "==", categoriaId));
        } else {
          // 📌 Si no, traemos todos los productos
          q = collection(db, "productos");
        }

        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(products);
      } catch (error) {
        console.error("Error al traer productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoriaId]);

  if (loading) {
    return <h2 className="text-center mt-5">Cargando productos...</h2>;
  }

  if (items.length === 0) {
    return <h2 className="text-center mt-5">No hay productos en esta categoría</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {items.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.imagen}
                alt={product.nombre}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text text-muted">Categoría: {product.categoria}</p>
                <h6 className="text-primary">${product.precio}</h6>
                <a href={`/item/${product.id}`} className="btn btn-outline-primary btn-sm me-2">
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
