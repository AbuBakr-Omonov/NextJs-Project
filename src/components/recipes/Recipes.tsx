import { Recipe } from '@/types/types';
import React from 'react';
import { Clock, UtensilsCrossed, Star } from 'lucide-react';

interface Props {
  data: {
    recipes: Recipe[];
  };
}

const RecipesCart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.recipes.map((rec: Recipe) => (
          <div
            key={rec.id}
            className="bg-gray-100 rounded-2xl shadow-md p-4 transition-transform transform hover:scale-101 hover:shadow-xl"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={rec.image}
                alt={rec.name}
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Star size={14} className="text-yellow-400" />
                <span>{rec.rating}</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-gray-900 font-semibold text-lg truncate">
                {rec.name}
              </h3>
            
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <Clock size={16} /> {rec.prepTimeMinutes + rec.cookTimeMinutes} mins
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <UtensilsCrossed size={16} /> {rec.servings} servings
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(RecipesCart);
