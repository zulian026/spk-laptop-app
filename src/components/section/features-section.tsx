import React from 'react';
import { TrendingUp, CheckCircle, Users, Award, Laptop, Star } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "Metode TOPSIS",
      description: "Menggunakan metode TOPSIS yang terbukti akurat dalam sistem pendukung keputusan untuk memberikan ranking laptop terbaik.",
      bgColor: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Multi Kriteria",
      description: "Mengevaluasi laptop berdasarkan performa, harga, baterai, portabilitas, dan kualitas layar secara komprehensif.",
      bgColor: "from-green-50 to-green-100",
      iconBg: "bg-green-600"
    },
    {
      icon: Users,
      title: "Personalisasi",
      description: "Rekomendasi disesuaikan dengan kebutuhan spesifik Anda: gaming, office work, design, atau programming.",
      bgColor: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-600"
    },
    {
      icon: Award,
      title: "Database Terkini",
      description: "Database laptop yang selalu diperbarui dengan spesifikasi dan harga terbaru dari berbagai merek terpercaya.",
      bgColor: "from-yellow-50 to-yellow-100",
      iconBg: "bg-yellow-600"
    },
    {
      icon: Laptop,
      title: "User Friendly",
      description: "Interface yang mudah digunakan dengan proses rekomendasi yang sederhana dan hasil yang mudah dipahami.",
      bgColor: "from-red-50 to-red-100",
      iconBg: "bg-red-600"
    },
    {
      icon: Star,
      title: "Hasil Akurat",
      description: "Sistem scoring yang presisi memberikan rekomendasi laptop dengan tingkat akurasi tinggi sesuai preferensi Anda.",
      bgColor: "from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Sistem Kami?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menggunakan teknologi canggih dan metode ilmiah untuk memberikan 
            rekomendasi laptop yang paling sesuai dengan kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${feature.bgColor} p-8 rounded-2xl`}>
                <div className={`${feature.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}