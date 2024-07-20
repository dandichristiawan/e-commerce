import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Product id: {id}</p>
    </div>
  );
};
