"use client"
import React, { useState } from 'react'
import { Star, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import { usePaystackPayment } from 'react-paystack';

const PRODUCTS = [
  { id: 1, name: 'Canada Trip', price: '9000', category: 'Countries', image: 'https://images.unsplash.com/photo-1578973615934-8d9cdb0792b4?q=80&w=989&auto=format&fit=crop' },
  { id: 2, name: 'Scotland Trip', price: '3000', category: 'Countries', image: 'https://images.unsplash.com/photo-1655818928102-23da04e3cacb?q=80&w=892&auto=format&fit=crop' },
  { id: 3, name: 'Wrapping paper', price: '1000', category: 'Accessories', image: 'https://images.unsplash.com/photo-1627157720831-e65362d40142?q=80&w=465&auto=format&fit=crop' },
  { id: 4, name: 'Eco-Lighter', price: '500', category: 'Accessories', image: 'https://images.unsplash.com/photo-1575908539629-62b3f98d7b3a?q=80&w=703&auto=format&fit=crop' },
];

const PayButton = ({ product, phone }: { product: any, phone: string }) => {
  const config = {
    reference: `LMN-${new Date().getTime()}`,
    email: `${phone || 'customer'}@quick-sale.com`,
    amount: Number(product.price.replace(/[^0-9.-]+/g, "")) * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: any) => {
    const message = `Payment Verified! ✅%0AItem: ${product.name}%0APrice: ₦${product.price}%0ARef: ${reference.reference}%0APhone: ${phone}`;
    window.open(`https://wa.me/2349066596603?text=${message}`, '_blank');
  };

  return (
    <button 
      disabled={phone.length < 10}
      onClick={() => initializePayment({onSuccess, onClose: () => {}})}
      className="w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-bold active:scale-95 disabled:bg-slate-100 transition-all"
    >
      Buy Now
    </button>
  );
};

export default function ProductGrid() {
  const [phone, setPhone] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="max-w-md mx-auto mb-10 p-6 bg-white rounded-3xl border shadow-sm">
         <input 
          type="tel" 
          placeholder="Enter WhatsApp Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-indigo-600 outline-none"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white border p-2 rounded-[2rem]">
            <img src={product.image} className="aspect-square object-cover rounded-[1.5rem] mb-3" />
            <h4 className="font-bold text-sm truncate px-2">{product.name}</h4>
            <p className="text-indigo-600 font-black px-2 mb-3">₦{product.price}</p>
            <PayButton product={product} phone={phone} />
          </div>
        ))}
      </div>
    </div>
  );
}