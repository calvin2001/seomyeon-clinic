import { clinicInfo } from '../data/clinicInfo'

export default function Services() {

  return (
    <section className="py-20 bg-white" id='services'>
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-green-600 mb-2">
            Korean Clinical Departments
          </h2>
          <p className="text-4xl font-bold font-nanum text-green-900 mb-4">
            한방(韓方) 진료 과목
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            전통 사암침법과 개인별 체질을 기반으로 한 전문 진료 서비스를 제공합니다
          </p>
        </div>

        {/* 진료과 카드 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicInfo.clinicalDepartments.map((dept) => (
            <div 
              key={dept.id}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 md:hover:border-green-500 md:hover:shadow-lg transition-all duration-300"
            >
              {/* 아이콘 */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-4">
                {dept.icon}
              </div>
              
              {/* 제목 */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {dept.name}
              </h3>
              
              {/* 설명 */}
              {dept.description ? (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dept.description}
                </p>
              ) : (
                <p className="text-gray-400 italic text-sm">
                  전문 진료 상담 문의
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold font-nanum mb-4">
              진료 예약 및 상담
            </h3>
            <p className="text-green-100 mb-8">
              전문 한의사와 상담하시고 맞춤 치료를 받아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${clinicInfo.contact.phone}`}
                className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold md:hover:bg-green-50 transition"
              >
                {clinicInfo.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}