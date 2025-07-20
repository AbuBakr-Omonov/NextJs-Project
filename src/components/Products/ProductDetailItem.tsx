"use client"
import { Product } from '@/types/types'
import { CheckCircle, ShoppingCart, Star, Tag, XCircle } from 'lucide-react'
import React, { useState } from 'react'

interface Props {
  data: Product
}

const ProductDetailItem: React.FC<Props> = ({ data }) => {
  const [index, setIndex] = useState(0)

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
              <img
                src={data.images?.[index] || data.thumbnail || "/placeholder.svg"}
                alt={data.title}
                className="w-full h-full object-contain"
              />
            </div>

            {Array.isArray(data.images) && data.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {data.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`relative aspect-square rounded-md overflow-hidden border cursor-pointer transition-colors ${
                      i === index ? "border-blue-500" : "border-gray-200 hover:border-blue-400"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${data.title} - ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{data.title}</h1>
              <p className="text-xl text-gray-600 mb-2">
                {data.brand} | {data.category}
              </p>
              <div className="flex items-center gap-2 text-lg text-gray-700">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">{data.rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 my-2" />

            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-bold text-blue-600">${data.price.toFixed(2)}</span>
              {data.stock > 0 ? (
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <CheckCircle className="w-5 h-5" />
                  Omborda ({data.stock})
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-600 font-medium">
                  <XCircle className="w-5 h-5" />
                  Omborda yo'q
                </span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">{data.description}</p>

            {data.tags?.length > 0 && (
              <>
                <div className="w-full h-px bg-gray-200 my-2" />
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Tag className="w-5 h-5 text-gray-600" /> Teglar
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="w-full h-px bg-gray-200 my-2" />

            <button
              className="flex items-center justify-center gap-3 bg-blue-600 text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={data.stock === 0}
            >
              <ShoppingCart className="w-6 h-6" />
              Savatga qo'shish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProductDetailItem)
