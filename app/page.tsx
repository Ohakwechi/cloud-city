import React from 'react';
import { ShoppingCart, Search, Menu, ArrowRight, Star } from 'lucide-react';

// Mock Data
const PRODUCTS = [
  { id: 1, name: 'Canada', price: '$9000', category: 'Countries', image: 'https://images.unsplash.com/photo-1578973615934-8d9cdb0792b4?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Scotland', price: '$3000', category: 'Countries', image: 'https://images.unsplash.com/photo-1655818928102-23da04e3cacb?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Wrapping paper', price: '1000', category: 'Accessories', image: 'https://images.unsplash.com/photo-1627157720831-e65362d40142?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Eco-Friendly lighter', price: '$500', category: 'Accessories', image: 'https://images.unsplash.com/photo-1575908539629-62b3f98d7b3a?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function EcommerceHome() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* --- Navigation --- */}
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
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </div>
              <Menu className="md:hidden w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative bg-slate-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full mb-4">
              Smoke assessories
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Elevate Your <span className="text-indigo-600">Everyday</span> Style.
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-md">
              Experience the fusion of high-end energy and minimalist taste. Curated for Urban lifestyle.
            </p>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition shadow-lg shadow-slate-200">
              Shop Collection <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative h-[400px] bg-indigo-100 rounded-3xl overflow-hidden shadow-2xl">
             <img src="https://plus.unsplash.com/premium_photo-1681400790571-4ab60c770f49?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* --- Product Grid --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-bold">Featured Products</h3>
            <p className="text-slate-500 mt-2">Our most loved items this week.</p>
          </div>
          <button className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square bg-slate-100 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  Add to Cart
                </button>
              </div>
              <p className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-widest">{product.category}</p>
              <h4 className="font-bold text-slate-800 mb-1">{product.name}</h4>
              <div className="flex items-center gap-2">
                <span className="font-black text-indigo-600">{product.price}</span>
                <div className="flex text-yellow-400 ml-auto">
                   <Star className="w-3 h-3 fill-current" />
                   <Star className="w-3 h-3 fill-current" />
                   <Star className="w-3 h-3 fill-current" />
                   <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 LUMINA E-Commerce. Built with Next.js & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}