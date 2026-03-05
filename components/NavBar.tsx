import React from 'react'
import { useCart } from '@/store/useCart';
import { ShoppingCart, Search, Menu, ArrowRight, Star } from 'lucide-react';

const NavBar = () => {

    const totalItems = useCart((state) => state.totalItems());
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold tracking-tighter text-indigo-600">cloud-city</h1>
              <div className="hidden md:flex gap-6 text-sm font-medium">
                <a href="#" className="hover:text-indigo-600 transition">Shop</a>
                <a href="#" className="hover:text-indigo-600 transition">New Arrivals</a>
                <a href="#" className="hover:text-indigo-600 transition">Brands</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-indigo-600" />

                {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
      {totalItems}
    </span>
  )}
              </div>
              <Menu className="md:hidden w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
