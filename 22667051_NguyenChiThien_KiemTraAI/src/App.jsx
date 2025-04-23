import React, { useState, useEffect } from 'react';

function App() {
  // Khởi tạo state từ localStorage nếu có, nếu không thì dùng giá trị mặc định
  const initialProducts = JSON.parse(localStorage.getItem('products')) || [
    { id: 1, name: "Áo thun", price: 120000, quantity: 10, category: "Thời trang" },
    { id: 2, name: "Quần jean", price: 250000, quantity: 5, category: "Thời trang" },
    { id: 3, name: "Giày sneaker", price: 800000, quantity: 2, category: "Thời trang" },
    { id: 4, name: "Điện thoại", price: 1000000, quantity: 3, category: "Công nghệ" },
    { id: 5, name: "Laptop", price: 2000000, quantity: 4, category: "Công nghệ" },
    { id: 6, name: "Quạt điện", price: 500000, quantity: 6, category: "Gia dụng" }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState({ name: '', price: '', quantity: '', category: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Cập nhật localStorage mỗi khi sản phẩm thay đổi
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!form.name || !form.price || !form.quantity || !form.category) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: parseInt(form.price),
      quantity: parseInt(form.quantity),
      category: form.category
    };

    setProducts(prev => [...prev, newProduct]);
    setForm({ name: '', price: '', quantity: '', category: '' });
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm("Bạn có chắc muốn xoá sản phẩm này?");
    if (confirmDelete) {
      setProducts(prev => prev.filter(product => product.id !== id));
    }
  };

  // Hàm lọc sản phẩm theo từ khóa tìm kiếm và thể loại
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? product.category === selectedCategory : true)
  );

  // Tính tổng sản phẩm và tổng tồn kho
  const totalProducts = filteredProducts.length;
  const totalStock = filteredProducts.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Danh sách sản phẩm</h1>

      {/* Ô tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
        />
      </div>

      {/* Dropdown chọn thể loại */}
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
        >
          <option value="">Chọn thể loại</option>
          <option value="Thời trang">Thời trang</option>
          <option value="Công nghệ">Công nghệ</option>
          <option value="Gia dụng">Gia dụng</option>
        </select>
      </div>

      {/* Hiển thị tổng sản phẩm và tổng tồn kho */}
      <div className="mb-6">
        <p><strong>Tổng số sản phẩm:</strong> {totalProducts}</p>
        <p><strong>Tổng tồn kho:</strong> {totalStock}</p>
      </div>

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
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
        >
          <option value="">Chọn thể loại</option>
          <option value="Thời trang">Thời trang</option>
          <option value="Công nghệ">Công nghệ</option>
          <option value="Gia dụng">Gia dụng</option>
        </select>
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
            <th className="border px-4 py-2">Thể loại</th>
            <th className="border px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price.toLocaleString()} đ</td>
              <td className="border px-4 py-2">{product.quantity}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-600 hover:underline"
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
