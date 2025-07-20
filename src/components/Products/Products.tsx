"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductsPage = ({data}:any) => {
  const router = useRouter()
  return (
    <div>
      <div className='container mx-auto mt-[20px] grid grid-cols-4 gap-4 max-[990px]:grid-cols-3 max-[768px]:grid-cols-2 max-[540px]:grid-cols-1'>
        {
            data?.products.map((product:any) => (
                <div key={product.id} className=" w-full  bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-md">
                      <div className="w-full h-48 overflow-hidden">
                        <img
                           onClick={() => router.push(`products/${product.id}`)}
                          src={product.thumbnail || "/placeholder.svg"}
                          alt={product.title}
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                
                      <div className="flex flex-col p-4 flex-grow">
                        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1 dark:text-gray-50 mb-1">{product.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1 mb-3">{product.description}</p>
                
                        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Brand: {product.brand}</span>
                          <span className="text-lg font-bold text-gray-900 dark:text-gray-50">${product.price.toFixed(2)}</span>
                        </div>
                      </div>
                </div>
            ))
        }

      </div>
    </div>
  )
}

export default React.memo(ProductsPage)