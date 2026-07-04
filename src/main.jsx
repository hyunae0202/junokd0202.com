import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { Scissors, MapPin, Phone, CalendarCheck, Globe2, Sparkles, BarChart3, MessageCircle, ChevronRight } from 'lucide-react';
import './styles.css';

const NAVER_RESERVE='https://map.naver.com/p/entry/place/33431131?placePath=/booking';
const NAVER_MAP='https://map.naver.com/p/entry/place/33431131';
const PHONE='02-497-6050';

function Analytics(){
  useEffect(()=>{const id=import.meta.env.VITE_GA_ID; if(!id) return; const s=document.createElement('script'); s.async=true; s.src=`https://www.googletagmanager.com/gtag/js?id=${id}`; document.head.appendChild(s); window.dataLayer=window.dataLayer||[]; function gtag(){window.dataLayer.push(arguments)} window.gtag=gtag; gtag('js',new Date()); gtag('config',id);},[]);
  return null;
}
function Header(){return <><div className="topbar">JUNO HAIR · KONKUK UNIV. STATION 2</div><nav><a className="brand" href="/"><Scissors size={18}/>준오헤어 건대역2호점</a><div className="links"><a href="/services">시술 안내</a><a href="/foreign">Foreign Reservation</a><a href="#location">오시는 길</a><a className="pill" href={NAVER_RESERVE}>네이버 예약</a></div></nav></>}
function Footer(){return <footer><b>준오헤어 건대역2호점</b><p>서울 광진구 능동로 109 2층 · 월~토 10:00–20:30 · {PHONE}</p><p className="tiny">본 페이지는 매장 안내 및 예약 편의를 위한 소개 페이지입니다. 실제 가격과 예약 가능 여부는 매장 상황에 따라 달라질 수 있습니다.</p></footer>}
function Hero(){return <section className="hero"><div><span className="badge"><Sparkles size={15}/> 건대입구역 헤어살롱</span><h1>나에게 어울리는 분위기까지<br/>섬세하게 설계하는 헤어 상담</h1><p>커트, 염색, 탈색, 펌, 클리닉, 두피케어까지. 원하는 이미지와 모발 상태를 함께 보고 무리 없는 시술 방향을 제안합니다.</p><div className="actions"><a className="btn" href={NAVER_RESERVE}><CalendarCheck size={18}/> 예약하기</a><a className="btn ghost" href="/services">시술 자세히 보기</a></div></div><div className="heroCard"><b>Quick Info</b><p>📍 건대입구역 인근</p><p>🕙 10:00–20:30</p><p>📞 {PHONE}</p><p>💬 외국인 예약 안내 페이지 운영</p></div></section>}
const groups=[
 ['염색','톤다운, 톤업, 새치커버, 패션컬러까지 원하는 분위기에 맞춰 컬러 방향을 잡습니다. 피부톤, 기존 염색 이력, 퇴색 후 색감까지 고려해 상담하며 잦은 염색으로 건조해진 모발은 클리닉 병행을 권장할 수 있습니다.'],
 ['탈색','하이톤, 애쉬, 베이지, 핑크, 블론드 계열을 원할 때 필요한 시술입니다. 탈색은 모발 손상도와 이전 시술 이력이 결과에 크게 영향을 주기 때문에 1회로 가능한 색인지, 여러 번 나눠야 하는지 상담이 중요합니다.'],
 ['펌','굵은 웨이브, 자연스러운 볼륨, C컬, S컬, 남성펌 등 라이프스타일에 맞는 형태를 제안합니다. 손질 난이도와 모발 길이, 손상도에 따라 일반펌·열펌·셋팅펌 등 방향이 달라질 수 있습니다.'],
 ['뿌리염색','자라난 뿌리 부분의 색 차이를 자연스럽게 맞추는 시술입니다. 새치커버, 기존 컬러와의 연결, 두피 민감도 등을 고려해 진행하며 전체 염색보다 부담을 줄이고 깔끔한 인상을 유지하기 좋습니다.'],
 ['클리닉/케어','염색, 탈색, 펌 후 거칠어짐과 푸석함이 느껴질 때 모발 내부와 표면 컨디션을 정돈합니다. 손상 정도에 따라 수분, 단백질, 윤기, 열 보호 중심으로 관리 방향이 달라집니다.'],
 ['두피/헤드스파','두피가 답답하거나 유분, 각질, 냄새, 피로감이 느껴질 때 추천됩니다. 샴푸만으로 부족한 두피 컨디션을 정돈하고 편안한 휴식감을 함께 느낄 수 있는 관리입니다.'],
 ['커트','얼굴형, 두상, 모발 흐름, 평소 손질 습관을 보고 디자인합니다. 레이어드컷, 허쉬컷, 단발, 숏컷, 남성컷, 앞머리커트 등 원하는 이미지에 맞춰 균형을 잡습니다.'],
 ['다운펌/부분펌','뜨는 옆머리, 앞머리 방향, 뿌리 볼륨처럼 작은 차이로 인상이 달라지는 부분을 정돈합니다. 전체 시술이 부담스러울 때 필요한 부위만 관리하기 좋습니다.']
];
function Home(){return <><Hero/><section><h2>추천 안내</h2><div className="grid3"><Card icon={<Scissors/>} title="시술 상세 페이지" text="염색, 탈색, 펌, 케어, 뿌리염색 등 시술별 설명을 길게 정리했습니다." link="/services"/><Card icon={<Globe2/>} title="외국인 전용 예약" text="영어 안내, 예약 전 확인사항, 상담 문구를 따로 구성했습니다." link="/foreign"/><Card icon={<BarChart3/>} title="방문자 통계 준비" text="구글 애널리틱스 ID만 넣으면 방문자 통계를 볼 수 있게 준비했습니다."/></div></section><Location/></>}
function Card({icon,title,text,link}){return <a className="card" href={link||'#'}><span>{icon}</span><h3>{title}</h3><p>{text}</p>{link&&<b>바로가기 <ChevronRight size={14}/></b>}</a>}
function Services(){return <><section className="pageHead"><span className="badge">SERVICE GUIDE</span><h1>시술 상세 안내</h1><p>상담 전 원하는 시술을 미리 살펴볼 수 있도록 주요 메뉴를 자세히 정리했습니다.</p></section><section className="serviceList">{groups.map(([t,d],i)=><article key={t}><div className="num">{String(i+1).padStart(2,'0')}</div><div><h2>{t}</h2><p>{d}</p><ul><li>모발 이력과 손상도에 따라 결과와 소요시간이 달라질 수 있습니다.</li><li>정확한 가격은 길이, 디자인, 디자이너, 추가 케어 여부에 따라 상담 후 안내됩니다.</li><li>예약 전 원하는 사진을 준비하면 상담이 더 빠르고 정확합니다.</li></ul></div></article>)}</section><CTA/></>}
function Foreign(){return <><section className="pageHead foreign"><span className="badge"><Globe2 size={15}/> FOREIGN GUEST</span><h1>Reservation Guide for Foreign Guests</h1><p>We provide a simple guide for haircut, color, bleach, perm, treatment and scalp care reservations.</p></section><section className="two"><div className="panel"><h2>How to book</h2><ol><li>Click Naver Reservation.</li><li>Choose service, date and stylist.</li><li>Prepare reference photos if you have a desired style.</li><li>If Korean booking is difficult, call the salon or show this page at the desk.</li></ol><a className="btn" href={NAVER_RESERVE}>Book on Naver</a></div><div className="panel"><h2>Useful phrases</h2><p><b>I want a haircut.</b><br/>커트하고 싶어요.</p><p><b>I want hair color / bleach / perm.</b><br/>염색 / 탈색 / 펌 하고 싶어요.</p><p><b>My scalp is sensitive.</b><br/>두피가 예민해요.</p><p><b>Please recommend a style that suits me.</b><br/>저한테 어울리는 스타일 추천해주세요.</p></div></section><section className="notice"><h2>Before chemical services</h2><p>Color, bleach and perm results may vary depending on previous dye, bleach, perm, straightening and hair damage history. Please tell the stylist your recent hair history before the service.</p></section></>}
function Location(){return <section id="location"><h2>오시는 길</h2><div className="two"><div className="panel"><p><MapPin size={18}/> 서울 광진구 능동로 109 2층</p><p><Phone size={18}/> {PHONE}</p><p>운영시간: 월~토 10:00–20:30</p><div className="actions"><a className="btn" href={NAVER_MAP}>네이버 지도</a><a className="btn ghost brown" href={`tel:${PHONE}`}>전화하기</a></div></div><div className="panel"><h3>다음에 추가하면 좋은 기능</h3><p>카카오톡 상담 버튼, 디자이너별 포트폴리오, 실제 시술 전후 사진, FAQ, 리뷰 모음, 네이버/구글 검색 등록을 추가하면 사이트 완성도가 더 올라갑니다.</p></div></div></section>}
function CTA(){return <section className="cta"><h2>상담 후 나에게 맞는 시술로 예약하세요</h2><p>원하는 사진, 현재 모발 사진, 최근 시술 이력을 준비하면 상담이 더 정확해집니다.</p><a className="btn" href={NAVER_RESERVE}><MessageCircle size={18}/> 예약하러 가기</a></section>}
function App(){const path=location.pathname; return <><Analytics/><Header/>{path.startsWith('/foreign')?<Foreign/>:path.startsWith('/services')?<Services/>:<Home/>}<Footer/></>}

createRoot(document.getElementById('root')).render(<App/>);
