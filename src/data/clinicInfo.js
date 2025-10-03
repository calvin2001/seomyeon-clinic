export const clinicInfo = {
  name: "서면한의원",
  tagline: "전통 사암침법의 정통",
  description: "경락의 흐름을 다스려 근본부터 치료합니다",
  
  contact: {
    phone: "051-816-1700",
    phoneDisplay: "051-816-1700",
    address: "부산광역시 부산진구 중앙대로 767",
    addressDetail: "4층 서면한의원",
    email: "seomyeon@clinic.com" // 있으면 바꾸세요
  },
  
  hours: {
    type1: {
      days: "월, 수, 금",
      time: "오전 9시 ~ 오후 6시",
      lunch: "점심시간: 오후 1시 ~ 2시"
    },
    type2: {
      days: "화, 목, 토",
      time: "오전 9시 ~ 오후 2시",
      lunch: "점심시간 없음"
    },
    closed: "일요일, 공휴일 휴진"
  },
  
  specialty: {
    name: "사암침법",
    shortDescription: "손과 발의 오수혈로 경락을 조절하여 근본 치료",
    fullDescription: `사암침법은 십이경락중 무릎아래와 팔꿈치 아래에 위치한 혈자리인 오수혈이라는 효과가 뛰어난 혈자리를 이용해 경락을 조절해 치료하는 침법입니다.
    
아픈 부위에 직접 침을 놓는 것이 아니라 손과 발에 침을 놓습니다. 경락의 흐름을 토대로 내부 장기를 고쳐 질병을 치료하는 우리나라가 세계에 자랑할 수 있는 전통 침법입니다.

기존의 사암침법에 사용한 오수혈을 사상의학적 관점에서 재조합, 재배열하여 체질별로 최적의 효과를 낼 수 있도록 만든 사상체질침을 운용합니다.`,
    features: [
      "아픈 부위가 아닌 손과 발 치료",
      "경락 흐름 조절로 근본 치료",
      "사상체질 맞춤 치료",
      "전통 한의학의 정수"
    ]
  },
  
  services: [
    {
      id: 1,
      name: "사암침법",
      icon: "🎯",
      description: "오수혈을 이용한 전통 침법"
    },
    {
      id: 2,
      name: "사상체질침",
      icon: "⚖️",
      description: "체질별 맞춤 치료"
    },
    {
      id: 3,
      name: "경락 치료",
      icon: "🔄",
      description: "경락의 흐름 정상화"
    }
  ],
  
  // SEO 키워드
  keywords: [
    "서면한의원",
    "부산 한의원",
    "사암침법",
    "사상체질침",
    "부산진구 한의원",
    "서면 침술"
  ]
}