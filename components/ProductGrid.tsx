"use client"
import React, { useState } from 'react'
import { Star, MessageCircle, Smartphone } from 'lucide-react';
import { usePaystackPayment } from 'react-paystack';

const PRODUCTS = [
  { id: 1, name: 'Canada Trip', price: '9000', category: 'Countries', image: 'https://images.unsplash.com/photo-1578973615934-8d9cdb0792b4?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Scotland Trip', price: '3000', category: 'Countries', image: 'https://images.unsplash.com/photo-1655818928102-23da04e3cacb?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Wrapping paper', price: '1000', category: 'Accessories', image: 'https://images.unsplash.com/photo-1627157720831-e65362d40142?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Eco-Friendly lighter', price: '500', category: 'Accessories', image: 'https://images.unsplash.com/photo-1575908539629-62b3f98d7b3a?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const PayButton = ({ product, phone }: { product: any, phone: string }) => {
  const cleanPrice = Number(product.price.replace(/[^0-9.-]+/g, "")) * 100;
  const MY_WHATSAPP_NUMBER = "2349066596603"; // <--- Update this!

  const config = {
    reference: `LMN-${new Date().getTime()}`,
    email: `${phone || 'customer'}@quick-sale.com`,
    amount: cleanPrice,
    publicKey: 'pk_live_3bfb9eb696a4572366dfb4b72fb7d02701d0d230',
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: any) => {
    const message = `Payment Verified! ✅%0AItem: ${product.name}%0APrice: ₦${product.price}%0ARef: ${reference.reference}%0APhone: ${phone}`;
    window.open(`https://wa.me/${MY_WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button 
      disabled={phone.length < 10}
      onClick={() => initializePayment({onSuccess, onClose: () => {}})}
      className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all active:scale-95 disabled:bg-slate-200 disabled:text-slate-400 flex items-center justify-center gap-2"
    >
      Buy Now
    </button>
  );
};

const ProductGrid = () => {
  const [phone, setPhone] = useState("");

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      {/* Phone Input Card */}
      <div className="max-w-xl mx-auto mb-16 p-8 bg-indigo-50 rounded-[2rem] border-2 border-indigo-100 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <Smartphone size={20} />
          </div>
          <h3 className="font-bold text-lg">Instant Checkout</h3>
        </div>
        <p className="text-indigo-900/60 text-sm mb-4 italic">
          Enter your WhatsApp number first to enable the "Buy Now" buttons.
        </p>
        <input 
          type="tel" 
          placeholder="Enter Phone (e.g. 080...)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-4 rounded-xl border-2 border-indigo-200 focus:border-indigo-600 outline-none text-xl font-medium transition-colors"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="flex flex-col group bg-white border border-slate-100 p-3 rounded-[2.5rem] hover:shadow-xl transition-shadow duration-300">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
              <img 
                src={product.image} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                alt={product.name} 
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-indigo-600">
                {product.category}
              </div>
            </div>
            
            <div className="px-2 pb-4">
              <h4 className="font-bold text-lg text-slate-800 leading-tight mb-2">{product.name}</h4>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-black text-slate-900">
                   {product.price.includes('$') ? product.price : `₦${product.price}`}
                </span>
                <div className="flex text-yellow-400 ml-auto">
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                </div>
              </div>
              
              <PayButton product={product} phone={phone} />
              
              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium text-slate-400">
                <MessageCircle size={14} className="text-green-500" />
                Auto-WhatsApp Receipt Enabled
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProductGrid;