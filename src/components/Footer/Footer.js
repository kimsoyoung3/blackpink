import React from "react";
import "./Footer.css"

const Footer = () => {

    return (
        <section className="footer">
            <div className="ft_top">
                <ul className="ft_left">
                    <li>CS CENTER</li>
                    <li>031-298-1027</li>
                    <li>평일 10:00-17:00, 점심 12:00-13:00<span>주말, 공휴일 휴무</span></li>
                </ul>
                <div className="ft_right">
                    <ul>
                        <li>SERVICE</li>
                        <li>공지사항</li>
                        <li>자주 묻는 질문</li>
                        <li>상품 후기</li>
                    </ul>
                    <ul>
                        <li>MY PAGE</li>
                        <li>마이페이지</li>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                    <ul>
                        <li>SOCIAL</li>
                        <li>인스타그램</li>
                    </ul>
                </div>
            </div>
            <div className="ft_bottom">
                <ul className="ft_bottom_kotext">
                    <li>상호 : 프리닉스</li>
                    <li>대표 : 노광호</li>
                    <li>사업자등록번호 : company_regno</li>
                    <li>통신판매업신고번호 : 2016-수원권선-0285[사업자정보확인]</li>
                </ul>
                <ul className="ft_bottom_kotext">
                    <li>대표번호 : 070-5213-7814</li>
                    <li>메일 : sales@prinics.com</li>
                    <li>주소 : 경기 수원시 권선구 산업로156번길 197-50 프리닉스</li>
                    <li>개인정보관리자 : 석인보</li>
                </ul>
                <ul className="ft_bottom_entext">
                    <li>Copyright (c) Prinics Co., Ltd</li>
                    <li>The KODAK trademark, logo and trade dress are used under license from KODAK.</li>
                    <li>© kodakphotoprinter. All rights reserved.</li>
                </ul>
            </div>

        </section>
    );

};
export default Footer;