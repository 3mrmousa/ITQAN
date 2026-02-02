import { useState, useEffect } from "react";

import webImg from "../../assets/cards/unnamed (7)-Photoroom.png";
import dataImg from "../../assets/cards/unnamed (8)-Photoroom.png";
import aiImg from "../../assets/cards/unnamed (9)-Photoroom.png";
import mobileImg from "../../assets/cards/unnamed (10)-Photoroom.png";

type exploreItem = {
  imgSrc: string;
  title: string;
  description: string;
};

const exploreItems: exploreItem[] = [
  {
    imgSrc: webImg,
    title: "مسار تطوير الويب",
    description: "تعلم أساسيات تطوير الويب من HTML إلى JavaScript.",
  },
  {
    imgSrc: dataImg,
    title: "مسار علوم البيانات",
    description: "اكتشف عالم البيانات وتحليلها باستخدام Python وR.",
  },
  {
    imgSrc: aiImg,
    title: "مسار الذكاء الاصطناعي",
    description: "تعلم تقنيات الذكاء الاصطناعي وتطبيقاتها الحديثة.",
  },
  {
    imgSrc: mobileImg,
    title: "مسار تطوير التطبيقات المحمولة",
    description: "أنشئ تطبيقات محمولة باستخدام Flutter وReact Native.",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === exploreItems.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? exploreItems.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div dir="rtl" className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(${currentIndex * 100}%)` }}
      >
        {exploreItems.map((item, index) => (
          <div key={index} className="w-full shrink-0 flex justify-center">
            <div className="max-w-xl bg-white/1 rounded-lg shadow-lg shadow-teal-500 p-6 mb-10 cursor-pointer hover:scale-105 hover:shadow-teal-300 duration-300 ">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute left-2 lg:left-100 top-1/2 -translate-y-1/2 bg-white/1 rounded-full p-2"
      >
        &#10095;
      </button>

      <button
        onClick={prevSlide}
        className="absolute right-2 lg:right-100 top-1/2 -translate-y-1/2 bg-white/1 rounded-full p-2"
      >
        &#10094;
      </button>
    </div>
  );
}
