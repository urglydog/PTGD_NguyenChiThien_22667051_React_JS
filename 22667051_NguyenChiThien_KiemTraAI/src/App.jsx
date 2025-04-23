import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const products = [
    { id: 1, name: "Áo thun", price: 120000, quantity: 10 },
    { id: 2, name: "Quần jean", price: 250000, quantity: 5 },
    { id: 3, name: "Giày sneaker", price: 800000, quantity: 2 }
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <table className="table-auto border w-full text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Tên sản phẩm</th>
            <th className="border px-4 py-2">Giá</th>
            <th className="border px-4 py-2">Tồn kho</th>
            <th className="border px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price.toLocaleString()} đ</td>
              <td className="border px-4 py-2">{product.quantity}</td>
              <td className="border px-4 py-2 text-red-500 cursor-pointer hover:underline">Xoá</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App
