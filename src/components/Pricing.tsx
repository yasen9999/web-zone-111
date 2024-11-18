import React, { useState } from 'react';
import { ShoppingBag, Zap, Rocket, Shield, Sparkles } from 'lucide-react';
import PackageModal from './PackageModal';

const packages = [
  {
    title: 'مجاناً',
    price: '0',
    icon: <Sparkles className="w-6 h-6" />,
    features: [
      'متجر إلكتروني أساسي',
      'قالب احترافي جاهز',
      'الدفع عند الاستلام',
      'تطبيق جوال بسيط',
      'إحصائيات المبيعات الأساسية'
    ],
    isFree: true
  },
  {
    title: 'أساسي',
    price: '29',
    icon: <ShoppingBag className="w-6 h-6" />,
    features: [
      'تخصيص كامل للمتجر',
      'بوابات دفع متعددة',
      'شهادة SSL مجانية',
      'تطبيق جوال متكامل',
      'دعم فني على مدار الساعة'
    ]
  },
  {
    title: 'متقدم',
    price: '79',
    icon: <Zap className="w-6 h-6" />,
    features: [
      'تصميم متجر مخصص',
      'نظام ولاء العملاء',
      'إدارة المخزون المتقدمة',
      'تكامل مع شركات الشحن',
      'تقارير تحليلية متقدمة',
      'تسويق عبر البريد الإلكتروني'
    ],
    highlighted: true
  },
  {
    title: 'مميز',
    price: '199',
    icon: <Rocket className="w-6 h-6" />,
    features: [
      'حل متكامل للشركات',
      'دعم متعدد اللغات',
      'نظام إدارة متعدد الفروع',
      'تكامل مع المحاسبة',
      'تخصيص كامل للتطبيق',
      'استشارات تجارية مخصصة',
      'أولوية الدعم الفني'
    ]
  }
];

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState<null | { title: string; price: string }>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePackageSelect = (pkg: { title: string; price: string }) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">اختر خطتك</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.highlighted 
                  ? 'bg-blue-600 text-white transform scale-105 shadow-xl' 
                  : pkg.isFree
                  ? 'bg-gradient-to-br from-purple-500 to-blue-600 text-white border-2 border-transparent'
                  : 'bg-white text-gray-900 border-2 hover:border-blue-600'
              }`}
            >
              <div className="flex items-center space-x-2 mb-4">
                {pkg.icon}
                <h3 className="text-xl font-bold">{pkg.title}</h3>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">${pkg.price}</span>
                <span className="text-sm">/شهرياً</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handlePackageSelect(pkg)}
                className={`w-full py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  pkg.highlighted 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
                    : pkg.isFree
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {pkg.isFree ? 'ابدأ الآن مجاناً' : 'اختر الباقة'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <PackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </section>
  );
}