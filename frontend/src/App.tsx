import { useEffect, useState } from 'react'

interface Product {
  id: string
  name: string
  sku: string | null
  cost_price: string
  sale_price: string
  stock: number
}

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Stockly</h1>
      <h2>Productos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>SKU</th>
              <th>Precio costo</th>
              <th>Precio venta</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sku ?? '—'}</td>
                <td>${product.cost_price}</td>
                <td>${product.sale_price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App