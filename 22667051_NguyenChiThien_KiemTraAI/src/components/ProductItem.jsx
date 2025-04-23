// ProductItem.js
import React from 'react';

const ProductItem = ({ product, onDelete }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="border px-4 py-2">{product.name}</td>
      <td className="border px-4 py-2">{product.price.toLocaleString()} đ</td>
      <td className="border px-4 py-2">{product.quantity}</td>
      <td className="border px-4 py-2">{product.category}</td>
      <td className="border px-4 py-2">
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-600 hover:underline"
        >
          Xoá
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
