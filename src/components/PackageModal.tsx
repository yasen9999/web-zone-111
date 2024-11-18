import React, { useState } from 'react';
import { X, CreditCard, User, Phone, Store, MapPin, Globe, Building, Check } from 'lucide-react';

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: {
    title: string;
    price: string;
  } | null;
}

export default function PackageModal({ isOpen, onClose, selectedPackage }: PackageModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    services: '',
    location: '',
    businessType: 'physical',
    phone: '',
    paymentMethod: ''
  });

  if (!isOpen || !selectedPackage) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl w-[95vw] max-w-6xl p-8 shadow-2xl animate-scale-in">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">تم تأكيد طلبك بنجاح!</h3>
              <p className="text-gray-600">سنتواصل معك قريباً لإتمام عملية التسجيل</p>
            </div>
          ) : (
            <>
              <button
                onClick={onClose}
                className="absolute left-4 top-4 text-gray-400 hover:text-gray-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Package Info Section */}
                <div className="md:w-1/3 bg-blue-50 p-6 rounded-xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Store className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedPackage.title}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      ${selectedPackage.price} شهرياً
                    </p>
                    <div className="text-right text-gray-600">
                      <p className="mb-2">✓ متجر إلكتروني متكامل</p>
                      <p className="mb-2">✓ دعم فني على مدار الساعة</p>
                      <p className="mb-2">✓ تخصيص كامل للتصميم</p>
                      <p className="mb-2">✓ تقارير وإحصائيات متقدمة</p>
                    </div>
                  </div>
                </div>

                {/* Form Section */}
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold mb-6">معلومات التسجيل</h4>
                  <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-right mb-2 text-gray-700 font-medium">
                        الاسم الكامل
                      </label>
                      <div className="relative">
                        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-right mb-2 text-gray-700 font-medium">
                        اسم الشركة أو المحل
                      </label>
                      <div className="relative">
                        <Building className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="أدخل اسم الشركة أو المحل"
                        />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label className="block text-right mb-2 text-gray-700 font-medium">
                        الخدمات والمنتجات
                      </label>
                      <textarea
                        name="services"
                        required
                        value={formData.services}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="اذكر الخدمات والمنتجات التي تقدمها"
                        rows={3}
                      />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-right mb-2 text-gray-700 font-medium">
                        نوع النشاط التجاري
                      </label>
                      <div className="relative">
                        <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          name="businessType"
                          required
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                        >
                          <option value="physical">متجر فعلي</option>
                          <option value="online">متجر إلكتروني فقط</option>
                          <option value="hybrid">متجر فعلي وإلكتروني</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-right mb-2 text-gray-700 font-medium">
                        موقع الشركة أو المحل
                      </label>
                      <div className="relative">
                        <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="أدخل العنوان الكامل"
                        />
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-right mb-2 text-gray-700 font-medium">
                        رقم الهاتف
                      </label>
                      <div className="relative">
                        <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="أدخل رقم هاتفك"
                        />
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-right mb-2 text-gray-700 font-medium">
                        طريقة الدفع
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          name="paymentMethod"
                          required
                          value={formData.paymentMethod}
                          onChange={handleChange}
                          className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white transition-all"
                        >
                          <option value="">اختر طريقة الدفع</option>
                          <option value="credit">بطاقة ائتمان</option>
                          <option value="debit">بطاقة مدين</option>
                          <option value="bank">تحويل بنكي</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg font-medium"
                    >
                      تأكيد الطلب
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}