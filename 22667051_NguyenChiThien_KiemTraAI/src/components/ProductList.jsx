// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onDelete }) => {
  return (
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
        {products.map(product => (
          <ProductItem key={product.id} product={product} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
