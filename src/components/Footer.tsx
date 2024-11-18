import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Store, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'فيسبوك' },
  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'تويتر' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'انستغرام' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'لينكد إن' },
];

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, text: 'info@webzone.com' },
  { icon: <Phone className="w-5 h-5" />, text: '+966 123 456 789' },
  { icon: <MapPin className="w-5 h-5" />, text: 'الرياض، المملكة العربية السعودية' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Store className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">ويب زون</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              نصنع مستقبل التجارة الإلكترونية من خلال حلول مبتكرة وتقنيات متطورة
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-blue-400 transition-colors">
                <a href="#features">المميزات</a>
              </li>
              <li className="hover:text-blue-400 transition-colors">
                <a href="#pricing">الأسعار</a>
              </li>
              <li className="hover:text-blue-400 transition-colors">
                <a href="#testimonials">آراء العملاء</a>
              </li>
              <li className="hover:text-blue-400 transition-colors">
                <a href="#contact">اتصل بنا</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-400">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">تابعنا</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ويب زون. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}