import { clinicInfo } from "../data/clinicInfo";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-green-900 to-green-800 text-white"
    >
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-green-300 mb-2">
            전통 한의학
          </h2>
          <p className="text-4xl font-bold">{clinicInfo.specialty.name}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 왼쪽: 소개 텍스트 */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-green-200">
              우리의 치료 철학
            </h3>

            {/* 설명 문단들 */}
            <div className="space-y-4 mb-8">
              {clinicInfo.specialty.fullDescription
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className="text-gray-100 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>

            {/* 특징 리스트 */}
            <div className="bg-green-800/50 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold mb-4 text-green-200">
                {clinicInfo.specialty.name}의 특징
              </h4>
              <ul className="space-y-3">
                {clinicInfo.specialty.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 flex-shrink-0 text-green-400 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 통계 박스들 */}
            <div className="grid grid-cols-3 gap-4">
              {clinicInfo.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-green-800/70 backdrop-blur-sm p-4 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-green-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽: 이미지 + 정보 */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
                alt="한의원 침 치료"
                className="w-full h-auto aspect-[4/3] object-cover"
              />

              {/* 오버레이 정보 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-3">{clinicInfo.name}</h3>

                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {clinicInfo.contact.address}
                    </p>

                    <p className="flex items-center gap-2 pl-7 text-gray-300">
                      {clinicInfo.contact.addressDetail}
                    </p>

                    <p className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {clinicInfo.contact.phoneDisplay}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="font-semibold text-green-300 mb-1">
                        진료 시간
                      </p>
                      <p className="text-xs text-gray-300">
                        {clinicInfo.hours.type1.days}:{" "}
                        {clinicInfo.hours.type1.time}
                      </p>
                      <p className="text-xs text-gray-300">
                        {clinicInfo.hours.type2.days}:{" "}
                        {clinicInfo.hours.type2.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 예약 버튼 (선택사항) */}
            <div className="mt-6 flex gap-4">
              <a
                href={`tel:${clinicInfo.contact.phone}`}
                className="flex-1 bg-white text-green-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-50 transition shadow-lg"
              >
                📞 전화 예약
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
