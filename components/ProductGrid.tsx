import React from 'react'
import { useCart } from '@/store/useCart';
import { Star } from 'lucide-react';



// Mock Data
const PRODUCTS = [
  { id: 1, name: 'Canada', price: '9000', category: 'Countries', image: 'https://images.unsplash.com/photo-1578973615934-8d9cdb0792b4?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Scotland', price: '$3000', category: 'Countries', image: 'https://images.unsplash.com/photo-1655818928102-23da04e3cacb?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Wrapping paper', price: '1000', category: 'Accessories', image: 'https://images.unsplash.com/photo-1627157720831-e65362d40142?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Eco-Friendly lighter', price: '$500', category: 'Accessories', image: 'https://images.unsplash.com/photo-1575908539629-62b3f98d7b3a?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const ProductGrid = () => {
    const addToCart = useCart((state) => state.addToCart);
  return (
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
                <button onClick={()=> addToCart({ id: product.id, name: product.name, price: 299, image: product.image })}  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
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

  )
}

export default ProductGrid
