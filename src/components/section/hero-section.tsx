import React, { useState, useEffect } from "react";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Laptop, Target, Users } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "Sistem Rekomendasi Terpercaya",
      title: "Temukan Laptop",
      highlight: "Ideal",
      subtitle: "Anda",
      description: "Sistem Pendukung Keputusan menggunakan metode TOPSIS untuk memberikan rekomendasi laptop terbaik sesuai kebutuhan dan budget Anda.",
      icon: <Laptop className="w-16 h-16 text-white" />,
      backgroundImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
    },
    {
      badge: "Akurasi Tinggi",
      title: "Rekomendasi",
      highlight: "Terpercaya",
      subtitle: "98% Akurat",
      description: "Algoritma TOPSIS yang telah teruji memberikan hasil rekomendasi dengan tingkat akurasi hingga 98% berdasarkan kriteria yang Anda tentukan.",
      icon: <Target className="w-16 h-16 text-white" />,
      backgroundImage: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      badge: "Dipercaya Pengguna",
      title: "Lebih dari",
      highlight: "1000+",
      subtitle: "Pengguna Puas",
      description: "Bergabunglah dengan ribuan pengguna yang telah menemukan laptop ideal mereka melalui sistem rekomendasi kami.",
      icon: <Users className="w-16 h-16 text-white" />,
      backgroundImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const stats = [
    { number: "500+", label: "Database Laptop", color: "text-blue-600" },
    { number: "98%", label: "Akurasi Rekomendasi", color: "text-green-600" },
    { number: "1000+", label: "Pengguna Puas", color: "text-purple-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full">
      {/* Full Screen Carousel Container */}
      <div className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-4">
                    <Star className="w-4 h-4" />
                    {slide.badge}
                  </div>
                  
                  <div className="mb-4">
                    <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      {React.cloneElement(slide.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                    <span className="text-yellow-400 block mt-2">{slide.highlight}</span>
                    {slide.subtitle && <div className="text-2xl sm:text-3xl md:text-4xl mt-3 font-medium">{slide.subtitle}</div>}
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6">
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                      Mulai Pencarian Laptop
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce z-20">
          <div className="text-white text-sm mb-2">Scroll Down</div>
          <div className="w-px h-8 bg-white/50 mx-auto"></div>
        </div>
      </div>

      {/* Stats Section - Below Carousel */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}