"use client"
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Notfound = () => {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black px-6 transition-colors duration-300">
      <div className="max-w-xl text-center">
        <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-gray-100 dark:bg-gray-800">
          <AlertTriangle className="text-black dark:text-white" size={40} />
        </div>

        <h1 className="mt-6 text-5xl font-bold text-black dark:text-white">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-gray-300">Sahifa topilmadi</h2>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
          Kechirasiz, bu sahifa mavjud emas yoki o‘chirilgan bo‘lishi mumkin.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
             onClick={() => router.push("/")}
            className="px-6 py-3 text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-lg shadow-md transition"
          >
            Go Home
          </button>
          <button
             onClick={() => router.back()}
            className="px-6 py-3 text-black border border-black hover:bg-gray-100 dark:text-white dark:border-white dark:hover:bg-gray-800 rounded-lg shadow-md transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
