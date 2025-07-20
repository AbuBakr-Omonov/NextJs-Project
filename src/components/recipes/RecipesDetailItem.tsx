import { Recipe } from '@/types/types';
import { CheckCircle, ChefHat, Flame, Tag, Timer, Utensils } from 'lucide-react';
import React, { FC } from 'react'

interface Props{
   data: Recipe;
}
const RecipesDetailItem: React.FC<Props> = ({data}) => {
  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col gap-6">
                <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                  <img
                    src={data.image || "/placeholder.svg?height=600&width=600&query=delicious food recipe"}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="grid gap-4">
                  <h2 className="text-2xl font-semibold">Masalliqlar</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-2 text-lg">
                    {data.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
    
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
                
                </div>
    
                <div className="w-full h-px bg-gray-200 my-4" />
    
                <div className="grid grid-cols-2 gap-4 text-lg">
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-gray-600" />
                    <span>Tayyorlash vaqti: {data.prepTimeMinutes} min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-gray-600" />
                    <span>Pishirish vaqti: {data.cookTimeMinutes} min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-gray-600" />
                    <span>Porsiya: {data.servings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-gray-600" />
                    <span>Kaloriya: {data.caloriesPerServing} kcal/porsiya</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Tag className="w-5 h-5 text-gray-600" />
                    <span>Taom turi: {data.cuisine}</span>
                  </div>
                </div>
    
                <div className="w-full h-px bg-gray-200 my-4" />
                <div className="grid gap-4">
                  <h2 className="text-2xl font-semibold">Tayyorlash usuli</h2>
                  <ol className="list-decimal list-inside space-y-2 text-lg">
                    {data.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
    
               
              </div>
            </div>
          </div>
      </div>
             
    </>
  )
}

export default React.memo(RecipesDetailItem)