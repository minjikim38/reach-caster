// ================================================================
//  Reach Caster — 데이터 설정 파일
//  이 파일만 수정하면 모든 내용이 반영됩니다.
// ================================================================

// ① 공통 링크 설정
const DEFAULT_SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeAK39xSiqZoX9cJ3YP9SgNneXdUTwznuCZ5huo7GBeCDRwDA/viewform";

// Ratio Finder 공통 리소스
const COMMON_RATIO_FINDER_RESOURCES = [
  { label: "RatioFinder_1934세.xlsx", url: "ratiofinder/RatioFinder_1934세.xlsx" },
  { label: "RatioFinder_3549세.xlsx", url: "ratiofinder/RatioFinder_3549세.xlsx" },
  { label: "RatioFinder_50세이상.xlsx", url: "ratiofinder/RatioFinder_50세이상.xlsx" }
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
          { label: "김민지님_타겟성과예측_20260507.xlsx", url: "reachpredictor/김민지님_타겟성과예측_20260507.xlsx" },
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
          { label: "신지아님_타겟성과예측_20260507.xlsx", url: "reachpredictor/신지아님_타겟성과예측_20260507.xlsx" },
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
          { label: "구지숙님_타겟성과예측_20260507.xlsx", url: "reachpredictor/구지숙님_타겟성과예측_20260507.xlsx" },
          { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2622?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EA%B5%AC%EC%A7%80%EC%88%99" }
        ]
      },
      {
        name: "Ratio Finder",
        resources: COMMON_RATIO_FINDER_RESOURCES
      },
    ]
  },

  "양은미":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "양은미님_타겟성과예측_20260507.xlsx", url: "reachpredictor/양은미님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3457?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%96%91%EC%9D%80%EB%AF%B8" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "구연수":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "구연수님_타겟성과예측_20260507.xlsx", url: "reachpredictor/구연수님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3782?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EA%B5%AC%EC%97%B0%EC%88%98" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "조아라":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "조아라님_타겟성과예측_20260507.xlsx", url: "reachpredictor/조아라님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2568?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%A1%B0%EC%95%84%EB%9D%BC" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "백현기":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "백현기님_타겟성과예측_20260507.xlsx", url: "reachpredictor/백현기님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2525?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EB%B0%B1%ED%98%84%EA%B8%B0" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "조상진":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "조상진님_타겟성과예측_20260507.xlsx", url: "reachpredictor/조상진님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3592?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%A1%B0%EC%83%81%EC%A7%84" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "박혜민":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "박혜민님_타겟성과예측_20260507.xlsx", url: "reachpredictor/박혜민님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3426?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EB%B0%95%ED%98%9C%EB%AF%BC" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "최선태":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "최선태님_타겟성과예측_20260507.xlsx", url: "reachpredictor/최선태님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3835?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn=&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi=&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%ED%86%A0%EC%8A%A4%EB%B1%85%ED%81%AC" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "김소중":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "김소중님_타겟성과예측_20260507.xlsx", url: "reachpredictor/김소중님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2164?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2025&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EA%B9%80%EC%86%8C%EC%A4%91" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "임혜정":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "임혜정님_타겟성과예측_20260507.xlsx", url: "reachpredictor/임혜정님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2089?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2025&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%9E%84%ED%98%9C%EC%A0%95" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "한선재":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "한선재님_타겟성과예측_20260507.xlsx", url: "reachpredictor/한선재님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/1754?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2025&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%ED%95%9C%EC%84%A0%EC%9E%AC" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "김다슬":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "김다슬님_타겟성과예측_20260507.xlsx", url: "reachpredictor/김다슬님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3684?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EA%B9%80%EB%8B%A4%EC%8A%AC" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "윤경현":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "윤경현님_타겟성과예측_20260507.xlsx", url: "reachpredictor/윤경현님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3838?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%9C%A4%EA%B2%BD%ED%98%84" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "임지원":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "임지원님_타겟성과예측_20260507.xlsx", url: "reachpredictor/임지원님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3006?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%9E%84%EC%A7%80%EC%9B%90" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "임찬":    { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "임찬님_타겟성과예측_20260507.xlsx", url: "reachpredictor/임찬님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2968?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%9E%84%EC%B0%AC" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "남유리":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "남유리님_타겟성과예측_20260507.xlsx", url: "reachpredictor/남유리님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/3803?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EB%82%A8%EC%9C%A0%EB%A6%AC" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "안성욱":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "안성욱님_타겟성과예측_20260507.xlsx", url: "reachpredictor/안성욱님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/2606?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2026&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%95%88%EC%84%B1%EC%9A%B1" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "황나경":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "황나경님_타겟성과예측_20260507.xlsx", url: "reachpredictor/황나경님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://..." }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },
  
  "신지원":  { surveyUrl: DEFAULT_SURVEY_URL, folders: [ { name: "Reach Predictor", resources: [
    { label: "신지원님_타겟성과예측_20260507.xlsx", url: "reachpredictor/신지원님_타겟성과예측_20260507.xlsx" },
    { label: "(기존) MTS - Reach Caster(GRPs)", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/739?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2025&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%8B%A0%EC%A7%80%EC%9B%90" }
  ] }, { name: "Ratio Finder", resources: COMMON_RATIO_FINDER_RESOURCES } ] },

};
