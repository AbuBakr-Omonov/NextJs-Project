import ProductDetailItem from '@/components/Products/ProductDetailItem'
import React from 'react'

export default async function UserDetail({ params }: { params: Promise<{ id: string }>}){
    const {id} = await params;
    console.log(id);
    const data = await fetch(`https://dummyjson.com/products/${id}`)
    const productDetail = await data.json()
     console.log(productDetail)
 
    return (
    <div>
      <ProductDetailItem data={productDetail}/>
    </div>
  )
}

