import React from 'react';
import { Store, Globe, Shield, Zap, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Store className="w-8 h-8 text-blue-600" />,
    title: "تصميم متجر مخصص",
    description: "قوالب مصممة احترافياً مخصصة لمتاجر الإلكترونيات"
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "وصول عالمي",
    description: "بيع منتجاتك في جميع أنحاء العالم مع دعم العملات المتعددة"
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "منصة آمنة",
    description: "أمان على مستوى المؤسسات لحماية أعمالك وبيانات عملائك"
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "أداء سريع",
    description: "تحسين السرعة والأداء لتجربة تسوق سلسة"
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "دعم 24/7",
    description: "فريق دعم متخصص متاح على مدار الساعة لمساعدتك"
  },
  {
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    title: "مدفوعات آمنة",
    description: "دعم لجميع وسائل الدفع الرئيسية مع حماية متقدمة"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">لماذا تختار ويب زون؟</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم حلولاً متكاملة لإنشاء وإدارة متجرك الإلكتروني بكل سهولة واحترافية
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}