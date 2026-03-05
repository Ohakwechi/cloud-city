  "use client"
  import React from 'react';
  import { ShoppingCart, Search, Menu, ArrowRight, Star } from 'lucide-react';
  import NavBar from '@/components/NavBar';
  import ProductGrid from '@/components/ProductGrid';



  export default function EcommerceHome() {

    return (
      <div className="min-h-screen bg-white text-slate-900">
        {/* --- Navigation --- */}
        
  <NavBar/>
        {/* --- Hero Section --- */}
        <section className="relative bg-slate-50 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              
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
        <ProductGrid/>
        {/* --- Footer --- */}
        <footer className="bg-slate-900 text-slate-400 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2026 LUMINA E-Commerce. Built by Buttons.</p>
          </div>
        </footer>
      </div>
    );
  }