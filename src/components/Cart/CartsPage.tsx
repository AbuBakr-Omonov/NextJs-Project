"use client"

import { IProduct } from '@/types/types'
import React from 'react'
interface Props{
    data:{
        carts:IProduct[]
    }
}
const CartsPage: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {data?.carts?.map((prod: IProduct) => (
        <div key={prod.id} className="border rounded-xl shadow-md p-4 bg-white">
          <img src={prod.thumbnail} alt={prod.title} className="w-full h-40 object-cover rounded-md mb-3" />
          <h2 className="font-semibold text-lg">{prod.title}</h2>
          <p>Price: ${prod.price}</p>
          <p>Quantity: {prod.quantity}</p>
          <p>Total: ${prod.total.toFixed(2)}</p>
          <p>Discount: {prod.discountPercentage}%</p>
          <p className="text-green-600 font-bold">Discounted Total: ${prod.discountedTotal.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};


export default React.memo(CartsPage)