import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';

export default function ShoppingCart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleAddSampleItem = () => {
    const sampleItem = {
      id: 1,
      name: 'Áo thun trắng',
      price: 200000,
      quantity: 1,
    };
    dispatch(addItem(sampleItem));
  };

  const handleQuantityChange = (id, newQty) => {
    dispatch(updateQuantity({ id, quantity: newQty }));
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-4">🛒 Giỏ hàng</h1>

      <button
        onClick={handleAddSampleItem}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Thêm sản phẩm mẫu
      </button>

      <ul className="mt-6 space-y-4">
        {cartItems.map(item => (
          <li key={item.id} className="p-4 border rounded-md shadow-sm flex flex-col gap-2">
            <div className="text-lg font-medium">{item.name}</div>
            <div>{item.price.toLocaleString()}đ</div>
            <div className="flex items-center gap-2">
              <label htmlFor={`qty-${item.id}`} className="text-sm">Số lượng:</label>
              <input
                id={`qty-${item.id}`}
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                className="w-16 border border-gray-300 rounded px-2 py-1"
                min="1"
              />
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Xoá
              </button>
            </div>
          </li>
        ))}
      </ul>

      <hr className="my-6" />

      <p className="text-lg font-semibold">🧮 Tổng số lượng: {totalQuantity}</p>
      <p className="text-lg font-semibold">💰 Tổng tiền: {totalPrice.toLocaleString()}đ</p>
    </div>
  );
}
