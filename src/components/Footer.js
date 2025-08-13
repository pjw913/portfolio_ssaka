import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="footer1">
                <h1>유한회사 싸카</h1>
                <p className="side1">이용약관<span className="line"></span><Link to="/">개인정보처리방침<span className="underline" /></Link></p>
                <p className="side2">
                대표자명 : 오정석 ・ 주소 : 서울특별시 중구 을지로 252-1(을지로6가) 싸카스포츠<br />
                대표전화번호 : 031-591-1588<br />
                반품 주소 : 경기도 남양주시 수동면 비룡로 586번안길 29-65, 싸카닷컴 (우)12034<br />
                이메일 : ssakastore@ssaka.com ・ 사업자등록번호 : 2018178599 <Link to="/">사업자정보확인<span className="underline" /></Link> <br />
                통신판매업신고번호 : 2016-서울중구-1227 ・ 개인정보보호책임자 : 최은선<br />
                호스팅제공 : 엔에이치엔커머스(주)
                </p>
                <p className="side3">Copyright ⓒ 2024 유한회사 싸카 all rights reserved.</p>
            </div>
            <div className="footer2">
                <p className="footermm1">
                    <Link to="/">공지사항<span className="underline" /></Link>
                    <Link to="/">FAQ<span className="underline" /></Link>
                </p>
                <p className="footermm2">
                    <Link to="/">1:1문의<span className="underline" /></Link>
                    <Link to="/">상품문의<span className="underline" /></Link>
                    <Link to="/">상품후기<span className="underline" /></Link>
                </p>
            </div>
            <div className="footer3">
                <div className="footerside1">
                    <h3>CS CENTER</h3>
                    <p>
                        <Link to="/">031-591-1588<span className="underline" /></Link><br />
                        <Link to="/">ssakastore@ssaka.com<span className="underline" /></Link>
                    </p>
                </div>
                <div className="footerside2">
                    <h3>BANK INFO</h3>
                    <p>기업은행 03104809204035 (예금주: 유한회사싸카)</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;