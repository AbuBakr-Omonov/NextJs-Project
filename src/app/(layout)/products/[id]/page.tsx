import ProductDetailItem from '@/components/Products/ProductDetailItem'
import React from 'react'

interface Props{
  params:{
    id:string
  }
}
const ProductDetail = async ({params}:Props) => {
    const id = await params.id
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

export default React.memo(ProductDetail)