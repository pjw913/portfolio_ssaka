import { Link, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function BestItem(){
    const category = {
        축구화:[
            {
                id:'best-eleven-1',
                images:[
                    '/image/besteleven1.png',
                    '/image/bestelevenhover1-1.png',
                    '/image/bestelevenhover1-2.png',
                    '/image/bestelevenhover1-3.png',
                    '/image/bestelevenhover1-4.png',
                ],
                name:'나이키 줌 머큐리얼 베이퍼 16 프로 TF(FQ8687800)',
                price:89400,
                discountPrice:149000,
                percentage:40,
                brand:'나이키',
                code:'FQ8687800',
                from:'중국',
                size:['265','270','275','280','285','290','295','300']
            },
            {
                id:'best-eleven-2',
                images:[
                    '/image/besteleven2.png',
                    '/image/bestelevenhover2-1.png',
                    '/image/bestelevenhover2-2.png',
                    '/image/bestelevenhover2-3.png',
                    '/image/bestelevenhover2-4.png',
                ],
                name:'나이키 줌 머큐리얼 베이퍼 16 프로 TF(FQ8687700)',
                price:79000,
                discountPrice:149000,
                percentage:47,
                brand:'나이키',
                code:'FQ8687700',
                from:'중국',
                size:['270','275','280','285','295']
            },
            {
                id:'best-eleven-3',
                images:[
                    '/image/besteleven3.png',
                    '/image/bestelevenhover3-1.png',
                    '/image/bestelevenhover3-2.png',
                    '/image/bestelevenhover3-3.png',
                    '/image/bestelevenhover3-4.png',
                ],
                name:'나이키 팬텀 GX 2 프로 TF(FJ2583300)',
                price:95400,
                discountPrice:159000,
                percentage:40,
                brand:'나이키',
                code:'FJ2583300',
                from:'인도네시아',
                size:['230','240','245','250','255','260','265','270','275','280','285','290','295']
            },
            {
                id:'best-eleven-4',
                images:[
                    '/image/besteleven4.png',
                    '/image/bestelevenhover4-1.png',
                    '/image/bestelevenhover4-2.png',
                    '/image/bestelevenhover4-3.png',
                    '/image/bestelevenhover4-4.png',
                ],
                name:'나이키 티엠포 레전드 10 프로 TF(DV4336001)',
                price:79500,
                discountPrice:159000,
                percentage:50,
                brand:'나이키',
                code:'DV4336001',
                from:'인도네시아',
                size:['230','235','240','245','250','255','260','265','270','275','280','285','290']
            },
            {
                id:'best-eleven-5',
                images:[
                    '/image/besteleven5.png',
                    '/image/bestelevenhover5-1.png',
                    '/image/bestelevenhover5-2.png',
                    '/image/bestelevenhover5-3.png',
                    '/image/bestelevenhover5-4.png',
                ],
                name:'나이키 팬텀 GX 2 엘리트 FG LV8(HV4890100)',
                price:230000,
                discountPrice:329000,
                percentage:30,
                brand:'나이키',
                code:'HV4890100',
                from:'중국',
                size:['220','245','250','255','260','275','290','295']
            },
            {
                id:'best-eleven-6',
                images:[
                    '/image/besteleven6.png',
                    '/image/bestelevenhover6-1.png',
                    '/image/bestelevenhover6-2.png',
                    '/image/bestelevenhover6-3.png',
                    '/image/bestelevenhover6-4.png',
                ],
                name:'나이키 티엠포 레전드 10 프로 TF(DV4336002)',
                price:79500,
                discountPrice:159000,
                percentage:50,
                brand:'나이키',
                code:'DV4336002',
                from:'인도네시아',
                size:['230','235','240','245','250','255','280']
            },
            {
                id:'best-eleven-7',
                images:[
                    '/image/besteleven7.png',
                    '/image/bestelevenhover7-1.png',
                    '/image/bestelevenhover7-2.png',
                    '/image/bestelevenhover7-3.png',
                    '/image/bestelevenhover7-4.png',
                ],
                name:'나이키 팬텀 GX 2 프로 TF(FJ2583003)',
                price:84000,
                discountPrice:159000,
                percentage:47,
                brand:'나이키',
                code:'FJ2583003',
                from:'인도네시아',
                size:['230','235','240','245','250','255','260','265','270','275','280','285','290','295','300']
            },
            {
                id:'best-eleven-8',
                images:[
                    '/image/besteleven8.png',
                    '/image/bestelevenhover8-1.png',
                    '/image/bestelevenhover8-2.png',
                    '/image/bestelevenhover8-3.png',
                    '/image/bestelevenhover8-4.png',
                ],
                name:'나이키 팬텀 6 로우 엘리트 FG LV8(HQ2331400)',
                price:329000,
                brand:'나이키',
                code:'HQ2331400',
                from:'중국',
                size:['235','245','250','255','260','265','270','275','280','285','290']
            },
            {
                id:'best-eleven-9',
                images:[
                    '/image/besteleven9.png',
                    '/image/bestelevenhover9-1.png',
                    '/image/bestelevenhover9-2.png',
                    '/image/bestelevenhover9-3.png',
                    '/image/bestelevenhover9-4.png',
                ],
                name:'나이키 줌 머큐리얼 슈퍼플라이 10 엘리트 FG LV8(HV4888100)',
                price:244000,
                discountPrice:349000,
                percentage:30,
                brand:'나이키',
                code:'HV4888100',
                from:'중국',
                size:['230','255']
            },
            {
                id:'best-eleven-10',
                images:[
                    '/image/besteleven10.png',
                    '/image/bestelevenhover10-1.png',
                    '/image/bestelevenhover10-2.png',
                    '/image/bestelevenhover10-3.png',
                    '/image/bestelevenhover10-4.png',
                ],
                name:'나이키 팬텀 GX 2 엘리트 FG(FJ2559003)',
                price:158000,
                discountPrice:299000,
                percentage:47,
                brand:'나이키',
                code:'FJ2559003',
                from:'보스니아',
                size:['240','245','250','255','295']
            },
        ],
        팀컬렉션:[
            {
                id:'best-collection-1',
                images:[
                    '/image/teamcollection1.png',
                    '/image/teamcollectionhover1-1.png',
                    '/image/teamcollectionhover1-2.png',
                    '/image/teamcollectionhover1-3.png',
                    '/image/teamcollectionhover1-4.png',
                ],
                name:'나이키 FC 바르셀로나 2025/26 홈 스타디움 저지(HJ4590456)',
                price:135000,
                mark:'오피셜마킹',
                brand:'나이키',
                code:'HJ4590456',
                from:'상세설명참조',
                clothsize:['[품절] 사이즈 : 095(S) (0원)','[품절] 사이즈 : 100(M) (0원)','사이즈 : 105(L) (0원)','사이즈 : 110(XL) (0원)','사이즈 : 115(XXL) (0원)'],
                players:['선수선택 : 선택안함   (0원)','선수선택 : RAPHINHA(11) - UCL   (0원)','선수선택 : GAVI(6) - UCL   (0원)','선수선택 : GAVI(6) - LIGA   (0원)','선수선택 : LAMINE YAMAL(10) - LIGA   (0원)','선수선택 : RAPHINHA(11) - LIGA   (0원)','선수선택 : F.DEJONG(21) - LIGA   (0원)','선수선택 : LEWANDOWSKI(9) - LIGA   (0원)','선수선택 : CUBARSI(2) - UCL   (0원)','선수선택 : F.DEJONG(21) - UCL   (0원)','선수선택 : KOUNDE(23) - UCL   (0원)','선수선택 : LEWANDOWSKI(9) - UCL   (0원)','선수선택 : PEDRI(8) - UCL   (0원)'],
                patch:['선택안함    (+29,000원)','우승5&10주년 챔스패치 - UCL    (+49,000원)']
            },
            {
                id:'best-collection-2',
                images:[
                    '/image/teamcollection2.png',
                    '/image/teamcollectionhover2-1.png',
                    '/image/teamcollectionhover2-2.png',
                    '/image/teamcollectionhover2-3.png',
                    '/image/teamcollectionhover2-4.png',
                ],
                name:'아디다스 아르헨티나 50주년 애니버서리 저지(JF2641)',
                price:90300,
                discountPrice:129000,
                percentage:30,
                brand:'아디다스',
                code:'JF2641',
                from:'태국',
                size:['090(S)','095(M)','100(L)','105(XL)','110(2XL)','115(3XL)','120(4XL)']
            },
            {
                id:'best-collection-3',
                images:[
                    '/image/teamcollection3.png',
                    '/image/teamcollectionhover3-1.png',
                    '/image/teamcollectionhover3-2.png',
                    '/image/teamcollectionhover3-3.png',
                    '/image/teamcollectionhover3-4.png',
                ],
                name:'[무료마킹] 나이키 대한민국 2024 홈 스타디움 저지(FJ4282679)',
                price:90300,
                discountPrice:129000,
                percentage:30,
                mark:'오피셜마킹',
                brand:'나이키',
                code:'FJ4282679',
                from:'태국',
                clothsize:['[품절] 사이즈 : 090(S) (0원)','[품절] 사이즈 : 095(M) (0원)','[품절] 사이즈 : 100(L) (0원)','사이즈 : 105(XL) (0원)','사이즈 : 110(2XL) (0원)'],
                marking:['선택안함','7.손흥민(홈)','4.김민재(홈)','18.이강인(홈)','9.조규성(홈)']
            },
            {
                id:'best-collection-4',
                images:[
                    '/image/teamcollection4.png',
                    '/image/teamcollectionhover4-1.png',
                    '/image/teamcollectionhover4-2.png',
                    '/image/teamcollectionhover4-3.png',
                    '/image/teamcollectionhover4-4.png',
                ],
                name:'나이키 토트넘 홋스퍼 2025/26 어웨이 스타디움 저지(HJ4609011)',
                price:135000,
                mark:'오피셜마킹',
                brand:'나이키',
                code:'HJ4609011',
                from:'그루지야(조지아)',
                clothsize:['사이즈 : 090(S) (0원)','사이즈 : 095(M) (0원)','사이즈 : 100(L) (0원)','사이즈 : 105(XL) (0원)','사이즈 : 110(2XL) (0원)','사이즈 : 115(3XL) (0원)','[품절] 사이즈 : 120(4XL) (0원)'],
                marking:['선수마킹 : 선택안함','선수마킹 : SON(7) (0원)'],
                patch:['리그패치 : 선택안함 (0원)','리그패치 : STANDARD PLAYER (0원)'],
                nrfr:['선택안함','인종차별반대패치 (+10,000원)']
            },
            {
                id:'best-collection-5',
                images:[
                    '/image/teamcollection5.png',
                    '/image/teamcollectionhover5-1.png',
                    '/image/teamcollectionhover5-2.png',
                    '/image/teamcollectionhover5-3.png',
                    '/image/teamcollectionhover5-4.png',
                ],
                name:'나이키 토트넘 홋스퍼 2025/26 홈 스타디움 저지(HJ4598101)',
                price:135000,
                mark:'오피셜마킹',
                brand:'나이키',
                code:'HJ4598101',
                from:'그루지야(조지아)',
                clothsize:['사이즈 : 090(S) (0원)','사이즈 : 095(M) (0원)','사이즈 : 100(L) (0원)','사이즈 : 105(XL) (0원)','사이즈 : 110(2XL) (0원)','사이즈 : 115(3XL) (0원)','[품절] 사이즈 : 120(4XL) (0원)'],
                marking:['선수마킹 : 선택안함','선수마킹 : SON(7) (0원)'],
                patch:['리그패치 : 선택안함 (0원)','리그패치 : STANDARD PLAYER (0원)'],
                nrfr:['선택안함','인종차별반대패치 (+10,000원)']
            },
            {
                id:'best-collection-6',
                images:[
                    '/image/teamcollection6.png',
                    '/image/teamcollectionhover6-1.png',
                    '/image/teamcollectionhover6-2.png',
                    '/image/teamcollectionhover6-3.png',
                    '/image/teamcollectionhover6-4.png',
                ],
                name:'아디다스 맨체스터유나이티드 2024/25 3RD 저지(IY7806)',
                price:65000,
                discountPrice:119000,
                percentage:45,
                brand:'아디다스',
                code:'IY7806',
                from:'캄보디아',
                clothsize:['[품절] 사이즈 : 090(S) (0원)','[품절] 사이즈 : 095(M) (0원)','[품절] 사이즈 : 100(L) (0원)','사이즈 : 105(XL) (0원)','사이즈 : 110(2XL) (0원)']
            },
            {
                id:'best-collection-7',
                images:[
                    '/image/teamcollection7.png',
                    '/image/teamcollectionhover7-1.png',
                    '/image/teamcollectionhover7-2.png',
                    '/image/teamcollectionhover7-3.png',
                    '/image/teamcollectionhover7-4.png',
                ],
                name:'나이키 파리 생제르맹 드라이 핏 아카데미 프로 프리매치 탑 4TH(HJ2987659)',
                price:34600,
                discountPrice:55000,
                percentage:37,
                brand:'나이키',
                code:'HJ2987659',
                from:'베트남',
                size:['090(S)','095(M)','100(L)']
            },
            {
                id:'best-collection-8',
                images:[
                    '/image/teamcollection8.png',
                    '/image/teamcollectionhover8-1.png',
                    '/image/teamcollectionhover8-2.png',
                    '/image/teamcollectionhover8-3.png',
                    '/image/teamcollectionhover8-4.png',
                ],
                name:'나이키 파리 생제르맹 2024/25 어웨이 스타디움 저지(FN8781101)',
                price:51600,
                discountPrice:129000,
                percentage:60,
                mark:'오피셜마킹',
                brand:'나이키',
                code:'FN8781101',
                from:'베트남',
                size:['090(S)','095(M)','100(L)','105(XL)','110(2XL)','115(3XL)']
            },
            {
                id:'best-collection-9',
                images:[
                    '/image/teamcollection9.png',
                    '/image/teamcollectionhover9-1.png',
                    '/image/teamcollectionhover9-2.png',
                    '/image/teamcollectionhover9-3.png',
                    '/image/teamcollectionhover9-4.png',
                ],
                name:'아디다스 맨체스터 유나이티드 2024/25 홈 저지(IU1397)',
                price:65000,
                discountPrice:119000,
                percentage:45,
                brand:'아디다스',
                code:'IU1397',
                from:'베트남',
                size:['090(S)','095(M)','100(L)','105(XL)','110(2XL)','115(3XL)','120(4XL)']
            },
            {
                id:'best-collection-10',
                images:[
                    '/image/teamcollection10.png',
                    '/image/teamcollectionhover10-1.png',
                    '/image/teamcollectionhover10-2.png',
                    '/image/teamcollectionhover10-3.png',
                    '/image/teamcollectionhover10-4.png',
                ],
                name:'아디다스 맨체스터 유나이티드 아이콘 저지(JF0386)',
                price:69000,
                discountPrice:99000,
                percentage:30,
                brand:'아디다스',
                code:'JF0386',
                from:'태국',
                size:['090(S)','095(M)','100(L)','105(XL)','110(2XL)','115(3XL)','120(4XL)']
            },
        ],
        신발:[
            {
                id:'best-shoes-1',
                images:[
                    '/image/shoes1.png',
                    '/image/bestshoeshover1-1.png',
                    '/image/bestshoeshover1-2.png',
                    '/image/bestshoeshover1-3.png',
                    '/image/bestshoeshover1-4.png',
                ],
                name:'뉴발란스 MT410CK5(131T19)',
                price:109000,
                couponprice:98100,
                coupon:'(쿠폰가)',
                brand:'뉴발란스',
                code:'131T19',
                from:'베트남',
                size:['250','255','275','285']
            },
            {
                id:'best-shoes-2',
                images:[
                    '/image/shoes2.png',
                    '/image/bestshoeshover2-1.png',
                    '/image/bestshoeshover2-2.png',
                    '/image/bestshoeshover2-3.png',
                    '/image/bestshoeshover2-4.png',
                ],
                name:'푸마 DARTER PRO FADE(31047601)',
                price:71400,
                discountPrice:119000,
                percentage:40,
                brand:'푸마',
                code:'31047601',
                from:'베트남',
                size:['250','265','270','275','280','285','290']
            },
            {
                id:'best-shoes-3',
                images:[
                    '/image/shoes3.png',
                    '/image/bestshoeshover3-1.png',
                    '/image/bestshoeshover3-2.png',
                    '/image/bestshoeshover3-3.png',
                    '/image/bestshoeshover3-4.png',
                ],
                name:'뉴발란스 쿠셔닝 슬라이드 SD1501WT3(101W10)',
                price:59000,
                couponprice:53100,
                coupon:'(쿠폰가)',
                brand:'뉴발란스',
                code:'101W10',
                from:'대한민국',
                size:['260','270','280','290']
            },
            {
                id:'best-shoes-4',
                images:[
                    '/image/shoes4.png',
                    '/image/bestshoeshover4-1.png',
                    '/image/bestshoeshover4-2.png',
                    '/image/bestshoeshover4-3.png',
                    '/image/bestshoeshover4-4.png',
                ],
                name:'푸마 리버레이트 나이트로 2 (37731501)',
                price:79500,
                discountPrice:159000,
                percentage:50,
                brand:'푸마',
                code:'37731501',
                from:'베트남',
                size:['255','270','275','290']
            },
            {
                id:'best-shoes-5',
                images:[
                    '/image/shoes5.png',
                    '/image/bestshoeshover5-1.png',
                    '/image/bestshoeshover5-2.png',
                    '/image/bestshoeshover5-3.png',
                    '/image/bestshoeshover5-4.png',
                ],
                name:'뉴발란스 슬라이드 1101(101B19)',
                price:34000,
                couponprice:30600,
                coupon:'(쿠폰가)',
                brand:'뉴발란스',
                code:'101B19',
                from:'대한민국',
                size:['250','260','270','280','290']
            },
            {
                id:'best-shoes-6',
                images:[
                    '/image/shoes6.png',
                    '/image/bestshoeshover6-1.png',
                    '/image/bestshoeshover6-2.png',
                    '/image/bestshoeshover6-3.png',
                    '/image/bestshoeshover6-4.png',
                ],
                name:'미즈노 릴렉스 슬라이드(11GJ156028)',
                price:18000,
                discountPrice:32000,
                percentage:44,
                brand:'미즈노',
                code:'11GJ156028',
                from:'인도네시아',
                size:['235~245','250~260','265~275','280~290']
            },
            {
                id:'best-shoes-7',
                images:[
                    '/image/shoes7.png',
                    '/image/bestshoeshover7-1.png',
                    '/image/bestshoeshover7-2.png',
                    '/image/bestshoeshover7-3.png',
                    '/image/bestshoeshover7-4.png',
                ],
                name:'아디다스 알파리스폰스 2.0 슬라이드(JP5397)',
                price:41300,
                discountPrice:59000,
                percentage:30,
                couponprice:37170,
                coupon:'(쿠폰가)',
                brand:'아디다스',
                code:'JP5397',
                from:'베트남',
                size:['225','235','245','255','265','275','285','295','305']
            },
            {
                id:'best-shoes-8',
                images:[
                    '/image/shoes8.png',
                    '/image/bestshoeshover8-1.png',
                    '/image/bestshoeshover8-2.png',
                    '/image/bestshoeshover8-3.png',
                    '/image/bestshoeshover8-4.png',
                ],
                name:'뉴발란스 SD1101HBB2 슬라이드(103B19)',
                price:34000,
                couponprice:30600,
                coupon:'(쿠폰가)',
                brand:'뉴발란스',
                code:'103B19',
                from:'대한민국',
                size:['240','250','260','270','280','290']
            },
            {
                id:'best-shoes-9',
                images:[
                    '/image/shoes9.png',
                    '/image/bestshoeshover9-1.png',
                    '/image/bestshoeshover9-2.png',
                    '/image/bestshoeshover9-3.png',
                    '/image/bestshoeshover9-4.png',
                ],
                name:'뉴발란스 쿠셔닝 슬라이드 SD1501BK3(101B19)',
                price:59000,
                couponprice:53100,
                coupon:'(쿠폰가)',
                brand:'뉴발란스',
                code:'101B19',
                from:'대한민국',
                size:['250','260','270','280','290']
            },
            {
                id:'best-shoes-10',
                images:[
                    '/image/shoes10.png',
                    '/image/bestshoeshover10-1.png',
                    '/image/bestshoeshover10-2.png',
                    '/image/bestshoeshover10-3.png',
                    '/image/bestshoeshover10-4.png',
                ],
                name:'뉴발란스 리커버리 슬라이드(116B19)',
                price:69000,
                couponprice:62100,
                coupon:'(쿠폰가)',
                brand:'뉴발란스',
                code:'116B19',
                from:'대한민국',
                size:['250','260','270','290']
            },
        ],
        의류:[
            {
                id:'best-clothes-1',
                images:[
                    '/image/teamcollection1.png',
                    '/image/teamcollectionhover1-1.png',
                    '/image/teamcollectionhover1-2.png',
                    '/image/teamcollectionhover1-3.png',
                    '/image/teamcollectionhover1-4.png',
                ],
                name:'나이키 FC 바르셀로나 2025/26 홈 스타디움 저지(HJ4590456)',
                price:135000,
                mark:'오피셜마킹',
                brand:'나이키',
                code:'HJ4590456',
                from:'상세설명참조',
                clothsize:['[품절] 사이즈 : 095(S) (0원)','[품절] 사이즈 : 100(M) (0원)','사이즈 : 105(L) (0원)','사이즈 : 110(XL) (0원)','사이즈 : 115(XXL) (0원)'],
                players:['선수선택 : 선택안함   (0원)','선수선택 : RAPHINHA(11) - UCL   (0원)','선수선택 : GAVI(6) - UCL   (0원)','선수선택 : GAVI(6) - LIGA   (0원)','선수선택 : LAMINE YAMAL(10) - LIGA   (0원)','선수선택 : RAPHINHA(11) - LIGA   (0원)','선수선택 : F.DEJONG(21) - LIGA   (0원)','선수선택 : LEWANDOWSKI(9) - LIGA   (0원)','선수선택 : CUBARSI(2) - UCL   (0원)','선수선택 : F.DEJONG(21) - UCL   (0원)','선수선택 : KOUNDE(23) - UCL   (0원)','선수선택 : LEWANDOWSKI(9) - UCL   (0원)','선수선택 : PEDRI(8) - UCL   (0원)'],
                patch:['선택안함    (+29,000원)','우승5&10주년 챔스패치 - UCL    (+49,000원)']
            },
            {
                id:'best-clothes-2',
                images:[
                    '/image/teamcollection2.png',
                    '/image/teamcollectionhover2-1.png',
                    '/image/teamcollectionhover2-2.png',
                    '/image/teamcollectionhover2-3.png',
                    '/image/teamcollectionhover2-4.png',
                ],
                name:'아디다스 아르헨티나 50주년 애니버서리 저지(JF2641)',
                price:90300,
                discountPrice:129000,
                percentage:30,
                brand:'아디다스',
                code:'JF2641',
                from:'태국',
                size:['090(S)','095(M)','100(L)','105(XL)','110(2XL)','115(3XL)','120(4XL)']
            },
            {
                id:'best-clothes-3',
                images:[
                    '/image/teamcollection4.png',
                    '/image/teamcollectionhover4-1.png',
                    '/image/teamcollectionhover4-2.png',
                    '/image/teamcollectionhover4-3.png',
                    '/image/teamcollectionhover4-4.png',
                ],
                name:'나이키 토트넘 홋스퍼 2025/26 어웨이 스타디움 저지(HJ4609011)',
                price:135000,
                mark:'오피셜마킹',
                brand:'나이키',
                code:'HJ4609011',
                from:'그루지야(조지아)',
                clothsize:['사이즈 : 090(S) (0원)','사이즈 : 095(M) (0원)','사이즈 : 100(L) (0원)','사이즈 : 105(XL) (0원)','사이즈 : 110(2XL) (0원)','사이즈 : 115(3XL) (0원)','[품절] 사이즈 : 120(4XL) (0원)'],
                marking:['선택안함','SON(7) (0원)'],
                patch:['리그패치 : 선택안함 (0원)',' 리그패치 : STANDARD PLAYER (0원)'],
                nrfr:['선택안함',' 인종차별반대패치 (+10,000원)']
            },
            {
                id:'best-clothes-4',
                images:[
                    '/image/teamcollection5.png',
                    '/image/teamcollectionhover5-1.png',
                    '/image/teamcollectionhover5-2.png',
                    '/image/teamcollectionhover5-3.png',
                    '/image/teamcollectionhover5-4.png',
                ],
                name:'나이키 토트넘 홋스퍼 2025/26 홈 스타디움 저지(HJ4598101)',
                price:135000,
                mark:'오피셜마킹',
                brand:'나이키',
                code:'HJ4598101',
                from:'그루지야(조지아)',
                clothsize:['사이즈 : 090(S) (0원)','사이즈 : 095(M) (0원)','사이즈 : 100(L) (0원)','사이즈 : 105(XL) (0원)','사이즈 : 110(2XL) (0원)','사이즈 : 115(3XL) (0원)','[품절] 사이즈 : 120(4XL) (0원)'],
                marking:['선택안함','SON(7) (0원)'],
                patch:['리그패치 : 선택안함 (0원)','리그패치 : STANDARD PLAYER (0원)'],
                nrfr:['선택안함','인종차별반대패치 (+10,000원)']
            },
            {
                id:'best-clothes-5',
                images:[
                    '/image/teamcollection6.png',
                    '/image/teamcollectionhover6-1.png',
                    '/image/teamcollectionhover6-2.png',
                    '/image/teamcollectionhover6-3.png',
                    '/image/teamcollectionhover6-4.png',
                ],
                name:'아디다스 맨체스터유나이티드 2024/25 3RD 저지(IY7806)',
                price:65000,
                discountPrice:119000,
                percentage:45,
                brand:'아디다스',
                code:'IY7806',
                from:'캄보디아',
                clothsize:['[품절] 사이즈 : 090(S) (0원)','[품절] 사이즈 : 095(M) (0원)','[품절] 사이즈 : 100(L) (0원)','사이즈 : 105(XL) (0원)','사이즈 : 110(2XL) (0원)']
            },
            {
                id:'best-clothes-6',
                images:[
                    '/image/teamcollection8.png',
                    '/image/teamcollectionhover8-1.png',
                    '/image/teamcollectionhover8-2.png',
                    '/image/teamcollectionhover8-3.png',
                    '/image/teamcollectionhover8-4.png',
                ],
                name:'나이키 파리 생제르맹 2024/25 어웨이 스타디움 저지(FN8781101)',
                price:51600,
                discountPrice:129000,
                percentage:60,
                mark:'오피셜마킹',
                brand:'나이키',
                code:'FN8781101',
                from:'캄보디아',
                size:['090(S)','095(M)','100(L)','105(XL)','110(2XL)','115(3XL)']
            },
            {
                id:'best-clothes-7',
                images:[
                    '/image/teamcollection7.png',
                    '/image/teamcollectionhover7-1.png',
                    '/image/teamcollectionhover7-2.png',
                    '/image/teamcollectionhover7-3.png',
                    '/image/teamcollectionhover7-4.png',
                ],
                name:'나이키 파리 생제르맹 드라이 핏 아카데미 프로 프리매치 탑 4TH(HJ2987659)',
                price:34600,
                discountPrice:55000,
                percentage:37,
                brand:'나이키',
                code:'HJ2987659',
                from:'베트남',
                size:['090(S)','095(M)','100(L)']
            },
            {
                id:'best-clothes-8',
                images:[
                    '/image/teamcollection9.png',
                    '/image/teamcollectionhover9-1.png',
                    '/image/teamcollectionhover9-2.png',
                    '/image/teamcollectionhover9-3.png',
                    '/image/teamcollectionhover9-4.png',
                ],
                name:'아디다스 맨체스터 유나이티드 2024/25 홈 저지(IU1397)',
                price:65000,
                discountPrice:119000,
                percentage:45,
                brand:'아디다스',
                code:'IU1397',
                from:'베트남',
                size:['090(S)','095(M)','100(L)','105(XL)','110(2XL)','115(3XL)','120(4XL)']
            },
            {
                id:'best-clothes-9',
                images:[
                    '/image/clothes9.png',
                    '/image/bestclotheshover9-1.png',
                    '/image/bestclotheshover9-2.png',
                    '/image/bestclotheshover9-3.png',
                    '/image/bestclotheshover9-4.png',
                ],
                name:'아디다스 포르토레 23 저지(IK5737)',
                price:23200,
                discountPrice:29000,
                percentage:20,
                couponprice:20880,
                coupon:'(쿠폰가)',
                brand:'아디다스',
                code:'IK5737',
                from:'상세설명참조',
                size:['095(M)','100(L)','105(XL)']
            },
            {
                id:'best-clothes-10',
                images:[
                    '/image/teamcollection10.png',
                    '/image/teamcollectionhover10-1.png',
                    '/image/teamcollectionhover10-2.png',
                    '/image/teamcollectionhover10-3.png',
                    '/image/teamcollectionhover10-4.png',
                ],
                name:'아디다스 맨체스터 유나이티드 아이콘 저지(JF0386)',
                price:69000,
                discountPrice:99000,
                percentage:30,
                brand:'아디다스',
                code:'JF0386',
                from:'태국',
                size:['090(S)','095(M)','100(L)','105(XL)','110(2XL)','115(3XL)','120(4XL)']
            },
        ],
        용품:[
            {
                id:'best-equipment-1',
                images:[
                    '/image/equipment1.png',
                    '/image/bestequipmenthover1-1.png',
                    '/image/bestequipmenthover1-2.png',
                    '/image/bestequipmenthover1-3.png',
                    '/image/bestequipmenthover1-4.png',
                ],
                name:'아디다스 풋볼 크루 삭스(JP2632)',
                price:7500,
                discountPrice:10000,
                percentage:25,
                couponprice:6750,
                coupon:'(쿠폰가)',
                brand:'아디다스',
                code:'JP2632',
                from:'중국',
                size:['022(S)','024(M)','026(L)']
            },
            {
                id:'best-equipment-2',
                images:[
                    '/image/equipment2.png',
                    '/image/bestequipmenthover2-1.png',
                    '/image/bestequipmenthover2-2.png',
                    '/image/bestequipmenthover2-3.png',
                    '/image/bestequipmenthover2-4.png',
                ],
                name:'아디다스 러닝 웨이스트 백(IT2046)',
                price:36700,
                discountPrice:45000,
                percentage:18,
                couponprice:33030,
                coupon:'(쿠폰가)',
                brand:'아디다스',
                code:'IT2046',
                from:'중국',
                size:['FREE']
            },
            {
                id:'best-equipment-3',
                images:[
                    '/image/equipment3.png',
                    '/image/bestequipmenthover3-1.png',
                    '/image/bestequipmenthover3-2.png',
                    '/image/bestequipmenthover3-3.png',
                    '/image/bestequipmenthover3-4.png',
                ],
                name:'뉴발란스 비전 트레이닝 라운드 볼(I00250)',
                price:7500,
                discountPrice:29000,
                percentage:74,
                brand:'뉴발란스',
                code:'I00250',
                from:'중국',
                size:['1']
            },
            {
                id:'best-equipment-4',
                images:[
                    '/image/equipment4.png',
                    '/image/bestequipmenthover4-1.png',
                    '/image/bestequipmenthover4-2.png',
                    '/image/bestequipmenthover4-3.png',
                    '/image/bestequipmenthover4-4.png',
                ],
                name:'나이키 J 가드(SP0040101)',
                price:13500,
                discountPrice:15000,
                percentage:10,
                brand:'나이키',
                code:'SP0040101',
                from:'중국',
                size:['0XS','00S','01M','02L']
            },
            {
                id:'best-equipment-5',
                images:[
                    '/image/equipment5.png',
                    '/image/bestequipmenthover5-1.png',
                    '/image/bestequipmenthover5-2.png',
                    '/image/bestequipmenthover5-3.png',
                    '/image/bestequipmenthover5-4.png',
                ],
                name:'아디다스 밀라노 23 삭스(스타킹)(IB7813)',
                price:9700,
                discountPrice:15000,
                percentage:35,
                couponprice:8730,
                coupon:'(쿠폰가)',
                brand:'아디다스',
                code:'IB7813',
                from:'파키스탄',
                size:['022(S)','024(M)','026(L)','028(XL)']
            },
            {
                id:'best-equipment-6',
                images:[
                    '/image/equipment6.png',
                    '/image/bestequipmenthover6-1.png',
                    '/image/bestequipmenthover6-2.png',
                    '/image/bestequipmenthover6-3.png',
                    '/image/bestequipmenthover6-4.png',
                ],
                name:'오클리 틴캔 캡(91154501V)',
                price:37000,
                brand:'오클리',
                code:'91154501V',
                from:'중국',
                size:['S/M']
            },
            {
                id:'best-equipment-7',
                images:[
                    '/image/equipment7.png',
                    '/image/bestequipmenthover7-1.png',
                    '/image/bestequipmenthover7-2.png',
                    '/image/bestequipmenthover7-3.png',
                    '/image/bestequipmenthover7-4.png',
                ],
                name:'아디다스 팀슬리브 23 튜브 스타킹(HT6541)',
                price:12000,
                discountPrice:15000,
                percentage:20,
                couponprice:10800,
                coupon:'(쿠폰가)',
                brand:'아디다스',
                code:'HT6541',
                from:'중국',
                size:['024(M)','028(XL)']
            },
            {
                id:'best-equipment-8',
                images:[
                    '/image/equipment8.png',
                    '/image/bestequipmenthover8-1.png',
                    '/image/bestequipmenthover8-2.png',
                    '/image/bestequipmenthover8-3.png',
                    '/image/bestequipmenthover8-4.png',
                ],
                name:'오클리 틴캔 캡(91154586L)',
                price:37000,
                brand:'오클리',
                code:'91154586L',
                from:'중국',
                size:['S/M']
            },
            {
                id:'best-equipment-9',
                images:[
                    '/image/equipment9.png',
                    '/image/bestequipmenthover9-1.png',
                    '/image/bestequipmenthover9-2.png',
                    '/image/bestequipmenthover9-3.png',
                    '/image/bestequipmenthover9-4.png',
                ],
                name:'미즈노 제로 글라이드 인솔(P1GZ220109)',
                price:14400,
                discountPrice:18000,
                percentage:20,
                brand:'미즈노',
                code:'P1GZ220109',
                from:'대만',
                size:['230~240','245~255','275~290','295~300']
            },
            {
                id:'best-equipment-10',
                images:[
                    '/image/equipment10.png',
                    '/image/bestequipmenthover10-1.png',
                    '/image/bestequipmenthover10-2.png',
                    '/image/bestequipmenthover10-3.png',
                    '/image/bestequipmenthover10-4.png',
                ],
                name:'푸마 네이마르 팬 그래픽 미니볼(08369201)',
                price:7500,
                discountPrice:29000,
                percentage:74,
                brand:'푸마',
                code:'08369201',
                from:'중국',
                size:['1']
            },
        ],

    }

    const [hoverStates, setHoverStates] = useState({});

    const handleMouseOver = (itemIndex) =>{
        setHoverStates(prev =>({
            ...prev,
            [itemIndex]: true
        }));
    }
    const handleMouseOut = (itemIndex) =>{
        setHoverStates(prev =>({
            ...prev,
            [itemIndex]: false
        }));
    }

    const itemClick = (item) =>{
        console.log(item);
        localStorage.setItem(`product_${item.id}`, JSON.stringify(item));
    }

    return(
        <section className="best-eleven">
            <h2>베스트 일레븐</h2>
            <Tabs className="main-visual">
                <TabList className="best-item">
                    <div>
                    {
                        Object.keys(category).map((category)=>(
                            <Tab key={category} className="tab-btn">{category}</Tab>
                        ))
                    }
                    </div>
                    <Link to="/">더보기 &gt;</Link>
                </TabList>
                
                {
                    Object.entries(category).map(([category,items],idx)=>(
                        
                        <TabPanel key={category} className="slide-visual">
                            
                            <div className="tab-panel">
                                <Swiper slidesPerView={5} spaceBetween={20} navigation={true} modules={[Navigation]} className="mySwiper">
                                {
                                    items.map((item,index)=>(
                                        <SwiperSlide key={item.id}>
                                            <Link to={`/product/${item.id}`} state={{product:item}} onClick={()=> itemClick(item)} className="link">
                                            <img src={hoverStates[index] ? item.images[1] : item.images[0]}
                                                 alt={item.name}
                                                 className="bestitem-img"
                                                 onMouseOver={() =>  handleMouseOver(index) }
                                                 onMouseOut={() => handleMouseOut(index)}
                                            />
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h3 className="item-title">{item.name}</h3>
                                            <p className="item-price">
                                                {
                                                    item.price && (
                                                        <span>
                                                            {item.price.toLocaleString()}원{item.percentage ? `(${item.percentage.toLocaleString()}%)` : ''}
                                                        </span>
                                                    )
                                                }
                                                {
                                                    item.discountPrice && (
                                                        <span className="gray-text">{item.discountPrice ? `${item.discountPrice.toLocaleString()}원` : ''}</span>
                                                    )
                                                }
                                            </p>
                                            <p className="mark">
                                                {
                                                    item.mark && (
                                                        <span className="item-mark">{item.mark ? `${item.mark}` : ''}</span>
                                                    )
                                                }
                                                {
                                                    item.couponprice && (
                                                        <span className="coupon">{item.couponprice ? `${item.couponprice.toLocaleString()}원` : ''}</span>
                                                    )
                                                }
                                                {
                                                    item.coupon && (
                                                        <span className="coupon">{item.coupon ? `${item.coupon}`:''}</span>
                                                    )
                                                }
                                            </p>
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                }
                                </Swiper>
                            </div>
                            
                        </TabPanel>
                    
                    ))   
                }
                
            </Tabs>
        </section>
    )
}

export default BestItem;