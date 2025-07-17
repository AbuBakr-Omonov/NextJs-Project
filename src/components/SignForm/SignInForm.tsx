"use client"

import { Mail, Lock, User } from "lucide-react"
import Link from "next/link"

const SignInForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-center p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">Ro'yxatdan o'tish</h2>
          <p className="text-gray-600 mt-2">Yangi hisob yaratish uchun ma'lumotlaringizni kiriting.</p>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-gray-700 block text-sm font-medium">
                Ism Familiya
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="fullName"
                  type="text"
                  placeholder="Ismingiz Familiyangiz"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-700 block text-sm font-medium">
                Elektron pochta
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="xxxx@gmail.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700 block text-sm font-medium">
                Parol
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-gray-700 block text-sm font-medium">
                Parolni tasdiqlash
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                <Link href="#" className="text-gray-600 hover:text-gray-900 hover:underline">
                  Shartlar va qoidalarga
                </Link>{" "}
                roziman
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white hover:bg-gray-800 py-2 px-4 rounded-md font-semibold transition-colors duration-200"
            >
              Ro'yxatdan o'tish
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Hisobingiz bormi?{" "}
            <Link href="/login" className="text-gray-900 hover:underline font-medium">
              Kirish
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
