"use client"

import { Mail, Lock } from "lucide-react"
import Link from "next/link"

const LoginForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-center p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">Kirish</h2>
          <p className="text-gray-600 mt-2">Hisobingizga kirish uchun elektron pochta va parolingizni kiriting.</p>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-700 block text-sm font-medium">
                Elektron pochta
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="xxxxx@gmail.com"
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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <label htmlFor="remember-me" className="text-sm text-gray-700">
                  Meni eslab qol
                </label>
              </div>
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
                Parolni unutdingizmi?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white hover:bg-gray-800 py-2 px-4 rounded-md font-semibold transition-colors duration-200"
            >
              Kirish
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Hisobingiz yo'qmi?{" "}
            <Link href="/signIn" className="text-gray-900 hover:underline font-medium">
              Ro'yxatdan o'tish
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
