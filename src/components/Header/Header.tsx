"use client"

import Link from "next/link"
import React, { useState } from "react"
import { Search, ShoppingCart, Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
  <header className="bg-white border-b border-b-gray-300 text-gray-900 py-4 px-4 sm:px-6 ">
  <div className="max-w-[1440px] mx-auto flex items-center justify-between">
    <div className="flex items-center gap-6">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-2xl sm:inline">NextJs</span>
      </Link>

      <nav className="hidden md:flex items-center gap-4 lg:gap-6">
        <Link href="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
        <Link href="/recipes" className="text-gray-600 hover:text-black transition-colors">Recipes</Link>
        <Link href="/products" className="text-gray-600 hover:text-black transition-colors">Products</Link>
        <Link href="/post" className="text-gray-600 hover:text-black transition-colors">Post</Link>
        {/* <Link href="/cart" className="text-gray-600 hover:text-black transition-colors">Cart</Link> */}
      </nav>
    </div>

    <div className="flex items-center gap-3">
      <button className="text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded transition-colors">
        <Search className="w-5 h-5" />
      </button>

      <Link href="/carts" className="text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded transition-colors">
        <ShoppingCart className="w-5 h-5" />
      </Link>

      <Link href="/login" className="hidden sm:block text-gray-600 hover:text-black transition-colors">
        Log in
      </Link>
      <Link href="/signIn" className="hidden sm:block text-gray-600 hover:text-black transition-colors">
        Sign in
      </Link>

      <button
        onClick={toggleMenu}
        className="sm:hidden text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded transition-colors relative"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}

        {isMenuOpen && (
          <nav className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-48 z-50">
            <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/recipes" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Recipes</Link>
            <Link href="/products" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link href="/post" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Post</Link>
            <Link href="/cart" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Cart</Link>

            <div className="border-t border-gray-200 mt-2 pt-2 sm:hidden">
              <Link href="/login" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Log in</Link>
              <Link href="/signIn" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Sign in</Link>
            </div>
          </nav>
        )}
      </button>
    </div>
  </div>
</header>

  )
}

export default React.memo(Header)
