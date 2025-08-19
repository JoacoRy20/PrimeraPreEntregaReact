# Proyecto E-Commerce (React + Firebase)

## Inicio rápido

1. Clonar o copiar proyecto
2. Ejecutar `npm install`
3. Copiar `.env.example` → `.env` y rellenar con tus credenciales de Firebase
4. Ejecutar `npm run dev`
5. En Firebase Console activar **Firestore** con colecciones:
   - `products`: en cada documento usar campos:
     - `name`, `description`, `price`, `stock`, `category` (textos como "ropa", "calzado")
   - `orders`: se generarán con `buyer`, `items`, `total`, `createdAt`
6. Probar catálogo, detalle, carrito, checkout

---

## Estructura destacada

- `src/context/CartContext.jsx`: gestión global del carrito
- `src/components`: nav, lista, detalle, carrito, checkout
- `src/firebase.js`: conexión a Firebase/Firestore
- `src/App.jsx`: rutas principales (`/`, `/item/:id`, `/cart`, `/checkout`, `*`)

---

## Deploy (opcional)

- Crear cuenta en **Vercel** o **Netlify**
- Conectar el repo (GitHub)
- Agregar variables de entorno (`VITE_API_KEY`, etc.)
- Lista y checkout ¡funcionan en vivo!
