export const clinicInfo = {
  name: "서면한의원",
  tagline: "25년 전통 사암침법의 正統",
  description: "경락의 흐름을 다스려 근본부터 치료합니다",
  map: "https://map.naver.com/p/entry/place/1448579279?placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202510032012&locale=ko&svcName=map_pcv5&c=15.00,0,0,0,dh",

  stats: [
    {
      id: 1,
      value: "25+",
      label: "년 경력"
    },
    {
      id: 2,
      value: "4명",
      label: "원장 수"
    },
    {
      id: 3,
      value: "1만+",
      label: "진료 케이스"
    }
  ],

  contact: {
    phone: "051-816-1700",
    phoneDisplay: "TEL.(051)816-1700",
    address: "부산광역시 부산진구 중앙대로 767",
    addressDetail: "부전빌딩 4층 서면한의원",
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
      "4가지 체질 분류로 맞춤 치료",
      "경락 흐름 조절로 근본 치료",
      "아픈 부위가 아닌 손과 발 치료",
      "개인별 처방으로 효과 극대화"
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

  clinicalDepartments: [
    {
      id: 1,
      name: "사상체질과",
      description: "개인의 체질에 맞춘 한방 치료"
      , icon: "⚖️",
    },
    {
      id: 2,
      name: "한방내과",
      description: "역류성 식도염, 급만성 위염, 기능성 소화불량, 과민성 대장증상, 변비, 설사"
      , icon: "🫀",
    },
    {
      id: 3,
      name: "한방부인과",
      description: "생리불순, 생리통, 갱년기 장애, 난임, 산후 회복, 냉대하, 질염등 여성질환"
      , icon: "🌸",
    },
    {
      id: 4,
      name: "한방소아과",
      description: "소아성장, 소화장애, 비염, 축농증, 천식, 아토피등 알러지 질환"
      , icon: "👶",
    },
    {
      id: 5,
      name: "한방신경정신과",
      description: "우울증, 불안장애, 화병, 신경성 위장장애, 공황장애, 어지럼증"
      , icon: "🧠",
    },
    {
      id: 6,
      name: "한방이비인후과",
      description: "감기, 비염, 축농증, 천식, 중이염, 이명, 난청, 어지럼증"
      , icon: "👂",
    },
    {
      id: 7,
      name: "한방피부과",
      description: "두드러기, 여드름, 습진, 건선, 아토피"
      , icon: "✨",
    },
    {
      id: 8,
      name: "침구과",
      description: "각종 통증질환, 퇴행성 관절염, 류마티스 관절염, 디스크탈출증, 디스크내장증, 척추관협착증, 기타 내과, 이비인후과, 피부과, 신경과등 질환"
      , icon: "🎯",
    },
    {
      id: 9,
      name: "한방재활의학과",
      description: "중풍 후유증, 사고 후유증, 구안와사"
      , icon: "🏥",
    },
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