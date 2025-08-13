import { Link } from "react-router-dom";

function Header(){
    return(
        <header id="main-header">
            <div className="innerbox">
                <h1><Link to="/"><img src="/image/logo.png" alt="sacca" /></Link></h1>
                <nav className="main-navbar">
                    <ul className="navbar-nav">
                        <li className="li1">
                            <Link to="/brand" className="main-name">브랜드</Link>
                            <div className="bg-white">
                            <ul className="brand">
                                <li><Link to="/">나이키</Link></li>
                                <li><Link to="/">아디다스</Link></li>
                                <li><Link to="/">푸마</Link></li>
                                <li><Link to="/">미즈노</Link></li>
                                <li><Link to="/">뉴발란스</Link></li>
                                <li><Link to="/">스케쳐스</Link></li>
                                <li><Link to="/">아슬레타</Link></li>
                                <li><Link to="/">오클리</Link></li>
                                <li><Link to="/">아스토레</Link></li>
                                <li><Link to="/">싸카</Link></li>
                            </ul>
                            </div>
                        </li>
                        <li className="li2">
                            <Link to="/soccershoes" className="main-name">축구화</Link>
                            <div className="bg-white">
                            <ul className="soccershoes">
                                <li>
                                    <Link to="/">브랜드</Link>
                                    <ul>
                                        <li><Link to="/">나이키</Link></li>
                                        <li><Link to="/">아디다스</Link></li>
                                        <li><Link to="/">푸마</Link></li>
                                        <li><Link to="/">미즈노</Link></li>
                                        <li><Link to="/">뉴발란스</Link></li>
                                        <li><Link to="/">스케쳐스</Link></li>
                                        <li><Link to="/">아슬레타</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">사일로</Link>
                                    <ul>
                                        <li><Link to="/">나이키 머큐리얼 슈퍼플라이</Link></li>
                                        <li><Link to="/">나이키 머큐리얼 베이퍼</Link></li>
                                        <li><Link to="/">나이키 팬텀</Link></li>
                                        <li><Link to="/">나이키 티엠포 레전드</Link></li>
                                        <li><Link to="/">아디다스 F50</Link></li>
                                        <li><Link to="/">아디다스 프레데터</Link></li>
                                        <li><Link to="/">아디다스 코파</Link></li>
                                        <li><Link to="/">푸마 퓨처</Link></li>
                                        <li><Link to="/">퓨마 울트라</Link></li>
                                        <li><Link to="/">퓨마 킹</Link></li>
                                        <li><Link to="/">미즈노 모렐리아 네오</Link></li>
                                        <li><Link to="/">미즈노 모렐리아</Link></li>
                                        <li><Link to="/">미즈노 알파</Link></li>
                                        <li><Link to="/">미즈노 모나르시다</Link></li>
                                        <li><Link to="/">뉴발란스 프론</Link></li>
                                        <li><Link to="/">뉴발란스 테켈라</Link></li>
                                        <li><Link to="/">뉴발란스 442</Link></li>
                                        <li><Link to="/">스케쳐스 SKX</Link></li>
                                        <li><Link to="/">스케쳐스 RAZOR</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">그라운드</Link>
                                    <ul>
                                        <li><Link to="/">천연잔디</Link></li>
                                        <li><Link to="/">인조잔디</Link></li>
                                        <li><Link to="/">하드그라운드</Link></li>
                                        <li><Link to="/">실내용/스트리트</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">풋살화</Link></li>
                            </ul>
                            </div>
                        </li>
                        <li className="li3">
                            <Link to="/team" className="main-name">팀 컬렉션</Link>
                            <div className="bg-white">
                            <ul className="team">
                                <li>
                                    <Link to="/">국가대표</Link>
                                    <ul>
                                        <li><Link to="/">대한민국</Link></li>
                                        <li><Link to="/">네덜란드</Link></li>
                                        <li><Link to="/">미국</Link></li>
                                        <li><Link to="/">멕시코</Link></li>
                                        <li><Link to="/">브라질</Link></li>
                                        <li><Link to="/">아르헨티나</Link></li>
                                        <li><Link to="/">이탈리아</Link></li>
                                        <li><Link to="/">잉글랜드</Link></li>
                                        <li><Link to="/">포르투갈</Link></li>
                                        <li><Link to="/">프랑스</Link></li>
                                        <li><Link to="/">호주</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">클럽</Link>
                                    <ul>
                                        <li>
                                            <Link to="/">프리미어리그</Link>
                                            <ul>
                                                <li><Link to="/">뉴캐슬</Link></li>
                                                <li><Link to="/">리버풀</Link></li>
                                                <li><Link to="/">맨체스터 시티</Link></li>
                                                <li><Link to="/">맨체스터 유나이티드</Link></li>
                                                <li><Link to="/">아스널</Link></li>
                                                <li><Link to="/">첼시</Link></li>
                                                <li><Link to="/">토트넘</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">라리가</Link>
                                            <ul>
                                                <li><Link to="/">레알 마드리드</Link></li>
                                                <li><Link to="/">바르셀로나</Link></li>
                                                <li><Link to="/">발렌시아</Link></li>
                                                <li><Link to="/">아틀레티코 마드리드</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">세리에A</Link>
                                            <ul>
                                                <li><Link to="/">AC 밀란</Link></li>
                                                <li><Link to="/">SSL 라치오</Link></li>
                                                <li><Link to="/">유벤투스</Link></li>
                                                <li><Link to="/">인터밀란</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">리그1</Link>
                                            <ul>
                                                <li><Link to="/">올림피크 드 마르세유</Link></li>
                                                <li><Link to="/">파리 생제르맹</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">분데스리가</Link>
                                            <ul>
                                                <li><Link to="/">VfL 보훔</Link></li>
                                                <li><Link to="/">도르트문트</Link></li>
                                                <li><Link to="/">라이프치히</Link></li>
                                                <li><Link to="/">묀헨 글라트바흐</Link></li>
                                                <li><Link to="/">바이에른 뮌헨</Link></li>
                                                <li><Link to="/">아우크스부르크</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">기타리그</Link>
                                            <ul>
                                                <li><Link to="/">셀틱</Link></li>
                                                <li><Link to="/">아인트호벤</Link></li>
                                                <li><Link to="/">알힐랄</Link></li>
                                                <li><Link to="/">인터 마이애미</Link></li>
                                                <li><Link to="/">잘츠부르크</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="li4">
                            <Link to="/shoes" className="main-name">신발</Link>
                            <div className="bg-white">
                            <ul className="shoes">
                                <li>
                                    <Link to="/">러닝화&워킹화</Link>
                                    <ul>
                                        <li><Link to="/">나이키</Link></li>
                                        <li><Link to="/">아디다스</Link></li>
                                        <li><Link to="/">푸마</Link></li>
                                        <li><Link to="/">미즈노</Link></li>
                                        <li><Link to="/">뉴발란스</Link></li>
                                        <li><Link to="/">오클리</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">슬리퍼&샌들</Link>
                                    <ul>
                                        <li><Link to="/">나이키</Link></li>
                                        <li><Link to="/">아디다스</Link></li>
                                        <li><Link to="/">푸마</Link></li>
                                        <li><Link to="/">미즈노</Link></li>
                                        <li><Link to="/">뉴발란스</Link></li>
                                        <li><Link to="/">오클리</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="li5">
                            <Link to="/clothes" className="main-name">의류</Link>
                            <div className="bg-white">
                            <ul className="clothes">
                                <li>
                                    <Link to="/">브랜드</Link>
                                    <ul>
                                        <li><Link to="/">나이키</Link></li>
                                        <li><Link to="/">아디다스</Link></li>
                                        <li><Link to="/">푸마</Link></li>
                                        <li><Link to="/">미즈노</Link></li>
                                        <li><Link to="/">뉴발란스</Link></li>
                                        <li><Link to="/">오클리</Link></li>
                                        <li><Link to="/">엄브로</Link></li>
                                        <li><Link to="/">아스토레</Link></li>
                                        <li><Link to="/">싸카</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">팀 웨어</Link>
                                    <ul>
                                        <li>
                                            <Link to="/">전사유니폼</Link>
                                            <ul>
                                                <li><Link to="/">뉴발란스</Link></li>
                                                <li><Link to="/">아스토레</Link></li>
                                                <li><Link to="/">싸카</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">커스텀(맞춤의류)</Link>
                                            <ul>
                                                <li><Link to="/">바람막이(우븐)</Link></li>
                                                <li><Link to="/">트랙탑(니트)</Link></li>
                                                <li><Link to="/">패딩(양면 팀 조끼)</Link></li>
                                                <li><Link to="/">트레이닝 저지(반팔)</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/">유니폼 상의 (긴팔)</Link></li>
                                        <li><Link to="/">유니폼 상의 (반팔)</Link></li>
                                        <li><Link to="/">유니폼 하의</Link></li>
                                        <li><Link to="/">팀 조끼</Link></li>
                                        <li><Link to="/">GK 의류</Link></li>
                                        <li><Link to="/">유소년 유니폼</Link></li>
                                        <li><Link to="/">동계 의류</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">상의</Link>
                                    <ul>
                                        <li><Link to="/">트레이닝 탑</Link></li>
                                        <li><Link to="/">트레이닝 재킷</Link></li>
                                        <li><Link to="/">긴팔티/폴로</Link></li>
                                        <li><Link to="/">반팔티/폴로</Link></li>
                                        <li><Link to="/">기능성 이너웨어</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">하의</Link>
                                    <ul>
                                        <li><Link to="/">트레이닝 팬츠</Link></li>
                                        <li><Link to="/">트레이닝 쇼츠</Link></li>
                                        <li><Link to="/">트레이닝 3/4 팬츠</Link></li>
                                        <li><Link to="/">기능성 이너웨어</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">세트</Link>
                                    <ul>
                                        <li><Link to="/">트레이닝 수트</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">아우터</Link>
                                    <ul>
                                        <li><Link to="/">다운 & 패딩</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">스노우</Link>
                                    <ul>
                                        <li><Link to="/">스노우 상의</Link></li>
                                        <li><Link to="/">스노우 하의</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="li6">
                            <Link to="/equipment" className="main-name">용품</Link>
                            <div className="bg-white">
                            <ul className="equipment">
                                <li>
                                    <Link to="/">축구공</Link>
                                    <ul>
                                        <li><Link to="/">매치볼</Link></li>
                                        <li><Link to="/">풋살볼</Link></li>
                                        <li><Link to="/">미니볼&스킬볼</Link></li>
                                        <li><Link to="/">볼펌프&볼백</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">축구 스타킹</Link>
                                    <ul>
                                        <li><Link to="/">스타킹</Link></li>
                                        <li><Link to="/">튜브 스타킹</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">신가드</Link></li>
                                <li>
                                    <Link to="/">글러브</Link>
                                    <ul>
                                        <li><Link to="/">GK 글러브</Link></li>
                                        <li><Link to="/">필드/피트니스 글러브</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">가방</Link>
                                    <ul>
                                        <li><Link to="/">팀백/더플백</Link></li>
                                        <li><Link to="/">백팩</Link></li>
                                        <li><Link to="/">슈즈백/짐쌕</Link></li>
                                        <li><Link to="/">기타</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">보호대&밴드</Link>
                                    <ul>
                                        <li><Link to="/">보호대/테이프</Link></li>
                                        <li><Link to="/">손목/헤드밴드</Link></li>
                                        <li><Link to="/">슬리브/암밴드</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">모자</Link>
                                    <ul>
                                        <li><Link to="/">캡/버킷햇</Link></li>
                                        <li><Link to="/">비니</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">양말</Link></li>
                                <li><Link to="/">넥워머</Link></li>
                                <li><Link to="/">아이웨어</Link></li>
                                <li>
                                    <Link to="/">스노우용품</Link>
                                    <ul>
                                        <li><Link to="/">스노우 고글</Link></li>
                                        <li><Link to="/">스노우 헬멧</Link></li>
                                        <li><Link to="/">스노우 장갑</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">기타용품</Link></li>
                            </ul>
                            </div>
                        </li>
                        <li className="li7">
                            <Link to="/womens" className="main-name">우먼스</Link>
                            <div className="bg-white">
                            <ul className="womens">
                                <li>
                                    <Link to="/">의류</Link>
                                    <ul>
                                        <li><Link to="/">상의</Link></li>
                                        <li><Link to="/">하의</Link></li>
                                        <li><Link to="/">아우터</Link></li>
                                        <li><Link to="/">스포츠브라</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">신발</Link>
                                    <ul>
                                        <li><Link to="/">운동화&런닝화</Link></li>
                                        <li><Link to="/">슬리퍼&샌들</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">용품</Link></li>
                            </ul>
                            </div>
                        </li>
                        <li className="li8">
                            <Link to="/youth" className="main-name">유소년</Link>
                            <div className="bg-white">
                            <ul className="youth">
                                <li>
                                    <Link to="/">축구화</Link>
                                    <ul>
                                        <li><Link to="/">나이키</Link></li>
                                        <li><Link to="/">아디다스</Link></li>
                                        <li><Link to="/">푸마</Link></li>
                                        <li><Link to="/">뉴발란스</Link></li>
                                        <li><Link to="/">스케쳐스</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">의류</Link>
                                    <ul>
                                        <li><Link to="/">상의</Link></li>
                                        <li><Link to="/">하의</Link></li>
                                        <li><Link to="/">아우터</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">용품</Link></li>
                            </ul>
                            </div>
                        </li>
                    </ul>
                    <ul className="sub-navbar">
                        <li><Link to="/">search</Link></li>
                        <li><Link to="/">mypage</Link></li>
                        <li><Link to="/">basket</Link></li>
                        <li><Link to="/">like</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;