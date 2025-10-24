import React from "react";
import "./AppBanner.css"

const AppBanner = () => {

    return (
        <section className="app_banner">
            <ul className="app_text">
                <li>Create with</li>
                <li>the Kodak Mobile App</li>
                <li>코닥 전용 앱으로 언제 어디서나 <span>나만의 사진을 편집하고 출력해보세요</span></li>
                <li>
                    <div><img src={`${process.env.PUBLIC_URL}/appBanner-img/google.svg`} alt=""/></div>
                    <div><img src={`${process.env.PUBLIC_URL}/appBanner-img/apple.svg`} alt=""/></div>

                </li>
                <li><img src={`${process.env.PUBLIC_URL}/appBanner-img/appLogo.svg`} alt=""/></li>
            </ul>
            <div className="app_image">
                <img src={`${process.env.PUBLIC_URL}/appBanner-img/jenni.svg`} alt=""/>
            </div>
        </section>
    )

};
export default AppBanner;