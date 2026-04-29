// ================================================================
//  Reach Caster — 데이터 설정 파일
//  이 파일만 수정하면 모든 내용이 반영됩니다.
// ================================================================

// ① 구글 설문 링크 (전체 공통)
const DEFAULT_SURVEY_URL = "https://forms.gle/여기에링크입력";


// ② 인터뷰 대상자별 자료 설정
//
//  각 항목 작성법:
//
//  "이름": {
//    surveyUrl: DEFAULT_SURVEY_URL,   ← 설문 링크 (개인별로 다르면 직접 URL 입력)
//    resources: [
//      { label: "버튼에 표시할 이름",  url: "https://..." },
//      { label: "엑셀파일명.xlsx",     url: "https://..." },
//      ...  ← 개수 제한 없이 추가 가능
//    ]
//  },
//
// ================================================================

const INTERVIEW_DATA = {

  "김민지": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: [
      { label: "(기존) Reach Caster", url: "https://ts.mezzomedia.co.kr/predict/grps/detail/739?pageNum=1&pageSize=50&scenarioType=grps&masterCmpYn&oldScenarioFlag=0&searchYear=2025&searchMonthStart=1&searchMonthEnd=12&searchTeamCode&searchMediaCode&searchCateCode&searchKpi&searchTargetCode&searchBudgetMin&searchBudgetMax&searchStatus&searchType=0&searchText=%EC%8B%A0%EC%A7%80%EC%9B%90" },
      { label: "(고도화) Reach Caster-Reach Rredictor.xlsx", url: "https://example.com/file2.xlsx" },
    ]
  },

  "구지숙": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: [
      // { label: "파일명 또는 링크 이름", url: "https://..." },
    ]
  },

  "양은미": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "구연수": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "조아라": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "백현기": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "조상진": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "박혜민": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "최선태": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "김소중": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "임혜정": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "한선재": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "김다슬": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "윤경현": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "임지원": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "임찬": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "남유리": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "안성욱": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "황나경": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

  "신지원": {
    surveyUrl: DEFAULT_SURVEY_URL,
    resources: []
  },

};
