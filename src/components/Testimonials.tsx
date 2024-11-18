import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'سارة الأحمد',
    role: 'الرئيس التنفيذي لشركة تك مارت',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'غيّر ويب زون مسار أعمالنا. منصة التجارة الإلكترونية سهلة الاستخدام للغاية وفريق الدعم متميز.',
    rating: 5
  },
  {
    name: 'محمد العلي',
    role: 'مؤسس إلكترو هب',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: 'منذ انتقالنا إلى ويب زون، زادت مبيعاتنا عبر الإنترنت بنسبة 200%. المنصة رائعة ببساطة.',
    rating: 5
  },
  {
    name: 'نورة السعيد',
    role: 'مديرة في جادجت برو',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    content: 'أفضل قرار اتخذناه هو اختيار ويب زون. منصتهم تحتوي على كل ما نحتاجه لتنمية تجارة الإلكترونيات.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">آراء عملائنا</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}