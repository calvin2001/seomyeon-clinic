import { useEffect, useRef } from 'react'
import { clinicInfo } from '../data/clinicInfo'

export default function Location() {
  const mapContainer = useRef(null)

  useEffect(() => {
    console.log('window.kakao:', window.kakao)

    // 카카오맵 로드 확인
    if (window.kakao && window.kakao.maps) {
      console.log('카카오맵 로드 성공!')

      // 지도 생성
      const options = {
        center: new window.kakao.maps.LatLng(35.1609010946407, 129.061239406594), // 임시 좌표
        level: 3 // 확대 레벨
      }
      
      const map = new window.kakao.maps.Map(mapContainer.current, options)
      
      // 마커 생성
      const markerPosition = new window.kakao.maps.LatLng(35.1609010946407, 129.061239406594)
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      })
      
      marker.setMap(map)
    } else {
      console.error('카카오맵 로드 실패!')
    }
  }, [])

  return (
    <section id="location" className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* 섹션 헤더 */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-green-600">
            Location
          </h2>
          <p className="mt-2 text-3xl font-bold font-nanum tracking-tight text-gray-900 sm:text-4xl">
            오시는 길
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            편리한 교통으로 쉽게 방문하실 수 있습니다
          </p>
        </div>

        {/* 지도 + 정보 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* 왼쪽: 카카오맵 */}
          <div>
            <div 
              ref={mapContainer}
              className="h-96 rounded-2xl overflow-hidden shadow-lg"
            />
          </div>

          {/* 오른쪽: 연락처 정보 */}
          <div className="space-y-8">
            
            {/* 주소 */}
            <div className="flex gap-4">
              <div className="flex-none">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">주소</h3>
                <p className="text-gray-600 leading-7">
                  {clinicInfo.contact.address}<br/>
                  {clinicInfo.contact.addressDetail}
                </p>
              </div>
            </div>

            {/* 전화 */}
            <div className="flex gap-4">
              <div className="flex-none">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전화번호</h3>
                <a 
                  href={`tel:${clinicInfo.contact.phone}`}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  {clinicInfo.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* 진료시간 */}
            <div className="flex gap-4">
              <div className="flex-none">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">진료시간</h3>
                <div className="text-gray-600 space-y-1 text-sm">
                  <p>{clinicInfo.hours.type1.days}: {clinicInfo.hours.type1.time}</p>
                  <p className="text-xs text-gray-500">{clinicInfo.hours.type1.lunch}</p>
                  <p className="mt-2">{clinicInfo.hours.type2.days}: {clinicInfo.hours.type2.time}</p>
                  <p className="text-xs text-gray-500">{clinicInfo.hours.type2.lunch}</p>
                  <p className="mt-2 text-red-600">{clinicInfo.hours.closed}</p>
                </div>
              </div>
            </div>

            {/* 교통편 */}
            <div className="flex gap-4">
              <div className="flex-none">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">교통편</h3>
                <div className="text-gray-600 space-y-1 text-sm">
                  <p>🚇 지하철: 서면역 7번 출구 도보 5분</p>
                  <p>🚌 버스: 서면역 정류장 하차</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}