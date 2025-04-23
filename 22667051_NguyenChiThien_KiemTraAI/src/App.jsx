import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Áo thun", price: 120000, quantity: 10 },
    { id: 2, name: "Quần jean", price: 250000, quantity: 5 },
    { id: 3, name: "Giày sneaker", price: 800000, quantity: 2 }
  ]);

  const [form, setForm] = useState({ name: '', price: '', quantity: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!form.name || !form.price || !form.quantity) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }


    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: parseInt(form.price),
      quantity: parseInt(form.quantity)
    };

    setProducts(prev => [...prev, newProduct]);
    setForm({ name: '', price: '', quantity: '' });
  };
  const handleDelete = (id) => {
    const confirmDelete = confirm("Bạn có chắc muốn xoá sản phẩm này?");
    if (confirmDelete) {
      setProducts(prev => prev.filter(product => product.id !== id));
    }
  };
  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Danh sách sản phẩm</h1>

      {/* Form thêm sản phẩm */}
      <div className="mb-6 flex flex-wrap gap-3">
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={form.name}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
        />
        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={form.price}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Tồn kho"
          value={form.quantity}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Thêm sản phẩm
        </button>
      </div>

      {/* Bảng danh sách */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Tên sản phẩm</th>
            <th className="border px-4 py-2">Giá</th>
            <th className="border px-4 py-2">Tồn kho</th>
            <th className="border px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price.toLocaleString()} đ</td>
              <td className="border px-4 py-2">{product.quantity}</td>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-red-600 hover:underline"
              >
                Xoá
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
