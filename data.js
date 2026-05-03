// ================================================================
//  Reach Caster — 데이터 설정 파일
//  이 파일만 수정하면 모든 내용이 반영됩니다.
// ================================================================

// ① 공통 링크 설정
const DEFAULT_SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeAK39xSiqZoX9cJ3YP9SgNneXdUTwznuCZ5huo7GBeCDRwDA/viewform";

// Ratio Finder 공통 리소스
const COMMON_RATIO_FINDER_RESOURCES = [
  { label: "비율 분석_ver1.xlsx", url: "https://example.com/file2.xlsx" },
  { label: "비율 분석_ver2.xlsx", url: "https://example.com/file2.xlsx" },
  { label: "비율 분석_ver3.xlsx", url: "https://example.com/file2.xlsx" }
];

// ② 인터뷰 대상자별 자료 설정
//
//  각 항목 작성법:
//
//  "이름": {
//    surveyUrl: DEFAULT_SURVEY_URL,
//    folders: [
//      {
//        name: "폴더 이름",
//        resources: [
//          { label: "버튼에 표시할 이름",  url: "https://..." },
//          { label: "엑셀파일명.xlsx",     url: "https://..." },
//        ]
//      },
//    ]
//  },
//
// ================================================================

const INTERVIEW_DATA = {

  "김민지": {
    surveyUrl: DEFAULT_SURVEY_URL,
    folders: [
      {
        name: "Reach Predictor",
        resources: [
          { label: "김민지_20260429.xlsx", url: "files/김민지_20260429.xlsx" },
          { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3060?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EA%B9%80%EB%AF%BC%EC%A7%80" },
        ]
      },
      {
        name: "Ratio Finder",
        resources: COMMON_RATIO_FINDER_RESOURCES
      },
    ]
  },

  "신지아": {
    surveyUrl: DEFAULT_SURVEY_URL,
    folders: [
      {
        name: "Reach Predictor",
        resources: [
          { label: "신지아_20260429.xlsx", url: "files/신지아_20260429.xlsx" },
          { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2136?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2025&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%8B%A0%EC%A7%80%EC%95%84" },
        ]
      },
      {
        name: "Ratio Finder",
        resources: COMMON_RATIO_FINDER_RESOURCES
      },
    ]
  },  

  "구지숙": {
    surveyUrl: DEFAULT_SURVEY_URL,
    folders: [
      {
        name: "Reach Predictor",
        resources: [
          { label: "파일명.xlsx", url: "https://example.com/file2.xlsx" },
          { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2622?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EA%B5%AC%EC%A7%80%EC%88%99" }
        ]
      },
      {
        name: "Ratio Finder",
        resources: [
          // { label: "파일명 또는 링크 이름", url: "https://..." },
        ]
      },
    ]
  },

  "양은미":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "파일명.xlsx", url: "https://example.com/file2.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3457?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%96%91%EC%9D%80%EB%AF%B8" }
  ] }, { name: "Ratio Finder", resources: [
    { label: "파일명.xlsx", url: "https://example.com/file2.xlsx" },
  ] } ] },
  "구연수":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "파일명.xlsx", url: "https://example.com/file2.xlsx" },
    { label: "Ratio Finder 사이트", url: "https://..." }
  ] }, { name: "Ratio Finder", resources: [
    { label: "파일명.xlsx", url: "https://example.com/file2.xlsx" }
  ] } ] },
  "조아라":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "파일명.xlsx", url: "https://example.com/file2.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://..." }
  ] }, { name: "Ratio Finder", resources: [
    { label: "파일명.xlsx", url: "https://example.com/file2.xlsx" }
  ] } ] },
  "백현기":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "파일명.xlsx", url: "https://example.com/file2.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2525?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EB%B0%B1%ED%98%84%EA%B8%B0" }
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "조상진":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "박혜민":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "최선태":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "김소중":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "임혜정":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "한선재":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "김다슬":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "윤경현":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "임지원":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "임찬":    { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "남유리":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "안성욱":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "황나경":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },
  "신지원":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    
  ] }, { name: "Ratio Finder", resources: [
    
  ] } ] },

};
