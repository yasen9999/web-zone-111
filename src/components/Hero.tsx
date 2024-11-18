import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          أطلق متجرك الإلكتروني اليوم
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          أنشئ حضورًا قويًا على الإنترنت لتجارة الإلكترونيات الخاصة بك مع حلولنا الشاملة للتجارة الإلكترونية
        </p>
        <div className="animate-fade-in-delay-2">
          <button 
            onClick={scrollToPricing}
            className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center mx-auto shadow-lg"
          >
            <Rocket className="w-5 h-5 ml-2" />
            ابدأ تجربة مجانية
          </button>
        </div>
      </div>
    </div>
  );
}