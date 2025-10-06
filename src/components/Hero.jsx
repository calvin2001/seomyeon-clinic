import { clinicInfo } from "../data/clinicInfo";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;

    const nextSlide = () => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    };

    // 5초마다 슬라이드 변경
    const interval = setInterval(nextSlide, 5000);

    // 컴포넌트 언마운트 시 정리
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container relative">
      {/* Background Slides - 한의원 관련 이미지들 */}
      <div
        className="hero-slide active"
        style={{ backgroundImage: "url('/images/hero-1.jpg')" }}
      ></div>
      <div
        className="hero-slide"
        style={{ backgroundImage: "url('/images/hero-2.jpg')" }}
      ></div>
      <div
        className="hero-slide"
        style={{ backgroundImage: "url('/images/hero-3.jpg')" }}
      ></div>

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero Content */}
      <div className="hero-content relative flex items-center justify-center h-screen text-center text-white py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* 태그라인 */}
          <div style={{ backgroundColor: "#30588C" }} className="inline-block backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 text-sm md:text-base font-medium animate-fade-in">
            {clinicInfo.tagline}
          </div>

          {/* 로고 + 메인 제목 */}
          <div className="flex items-center gap-4 mb-6 justify-center">
            <img
              src="/images/logo-2.jpg"
              alt="서면한의원 로고"
              className="h-16 w-16 object-cover rounded-full"
            />
            <h1 className="font-nanum text-5xl md:text-7xl leading-tight drop-shadow-lg">
              {clinicInfo.name}
            </h1>
          </div>

          {/* 설명 */}
          <p className="text-xl md:text-2xl mb-4 font-light drop-shadow-md">
            {clinicInfo.description}
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
            {clinicInfo.specialty.shortDescription}
          </p>

          {/* 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${clinicInfo.contact.phone}`}
              style={{ backgroundColor: "#30588C" }}
              className=" hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              📞 {clinicInfo.contact.phoneDisplay}
            </a>
            <button
            style={{ color: "#30588C" }}
            className="bg-white/90 hover:bg-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            onClick={() => window.location.href = clinicInfo.map}
            >
             📍 오시는 길
            </button>
          </div>

          {/* 진료 시간 미리보기 */}
          <div className="mt-12 space-y-2 text-sm md:text-base backdrop-blur-sm bg-black/20 inline-block px-8 py-4 rounded-lg">
            <p className="text-gray-200">
              📅 {clinicInfo.hours.type1.days}: {clinicInfo.hours.type1.time}
            </p>
            <p className="text-gray-200">
              📅 {clinicInfo.hours.type2.days}: {clinicInfo.hours.type2.time}
            </p>
            <p className="text-red-300 font-semibold">
              🚫 {clinicInfo.hours.closed}
            </p>
          </div>

          {/* 스크롤 다운 힌트 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
