// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './feature/card/cardslice'

function App() {
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
    <div style={{ padding: '20px', maxWidth: '2000px', margin: 'auto' }}>
      <h1>🛒 Giỏ hàng</h1>
      <button onClick={handleAddSampleItem}>Thêm sản phẩm mẫu</button>

      <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
        {cartItems.map(item => (
          <li key={item.id} style={{ marginBottom: '15px' }}>
            <strong>{item.name}</strong> - {item.price.toLocaleString()}đ
            <br />
            Số lượng: 
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              style={{ width: '60px', marginLeft: '10px' }}
              min="1"
            />
            <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: '10px' }}>
              Xoá
            </button>
          </li>
        ))}
      </ul>

      <hr />
      <p><strong>Tổng số lượng:</strong> {totalQuantity}</p>
      <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}đ</p>
    </div>
  );
}

export default App;
