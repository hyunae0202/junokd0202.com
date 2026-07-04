# junokd02.com 업그레이드 프로젝트

## 포함된 기능
- 메인 페이지
- 시술 상세 페이지: /services
- 외국인 전용 예약 안내 페이지: /foreign
- Google Analytics 방문자 통계 준비
- robots.txt / sitemap.xml
- Vercel 직접 주소 접속 대응 vercel.json

## 방문자 통계 연결
Vercel > 프로젝트 > Settings > Environment Variables 에서
VITE_GA_ID = 구글 애널리틱스 측정 ID 를 추가하세요.
예: G-XXXXXXXXXX
추가 후 Redeploy 해야 적용됩니다.

## GitHub 업로드
ZIP 자체가 아니라 압축을 푼 안의 모든 파일과 폴더를 업로드하세요.
