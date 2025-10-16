import React, {useEffect, useRef, useState} from "react";
import "./Intro.css"

const Intro = () => {
    const topRef = useRef(null);
    const bottomRef = useRef(null);

    const [topVisible, setTopVisible] = useState(false);
    const [bottomVisible, setBottomVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // intro_top 체크
            if (topRef.current) {
                if (scrollY > topRef.current.offsetTop - 100) {
                    setTopVisible(true);
                } else {
                    setTopVisible(false);
                }
            }

            // intro_bottom 체크
            if (bottomRef.current) {
                if (scrollY > bottomRef.current.offsetTop - 150) {
                    setBottomVisible(true);
                } else {
                    setBottomVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // 초기 상태 체크
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section className="intro acontent">
            <div className="intro_top" ref={topRef}>
                <div className={`topContent ${topVisible ? "visible" : ""}`}><h3>Beyond the picture, into your heart</h3></div>
                <div className={`topContent ${topVisible ? "visible" : ""}`}><p className="koText">사진을 너머, 마음속으로</p></div>
            </div>
            <ul className="intro_bottom" ref={bottomRef}>
                <div></div>
                <div></div>
                <li>
                    <div className={bottomVisible ? "visible" : ""}>
                        <h1><span>BLACKPINK</span> X <span>KODAK</span></h1>
                        <img src="/intro-img/intro1.svg" alt=""/>
                    </div>

                </li>
                <li>
                    <div className={bottomVisible ? "visible" : ""}>
                        <img src="/intro-img/intro2.svg" alt=""/>
                        <ul className="intro_arrow">
                            <li><img src="/intro-img/intro_arrow.svg" alt=""/></li>
                            <li><img src="/intro-img/intro_arrow.svg" alt=""/></li>
                            <li><img src="/intro-img/intro_arrow.svg" alt=""/></li>
                            <li><img src="/intro-img/intro_arrow.svg" alt=""/></li>
                        </ul>
                        <h1>Is to Capturing </h1>
                        <img src="/intro-img/intro3.svg" alt=""/>
                    </div>
                </li>
                <li>
                    <div className={bottomVisible ? "visible" : ""}>
                        <img className="symbol" src="/intro-img/symbol_1.svg" alt=""/>
                        <h1>moments</h1>
                        <img src="/intro-img/intro3.svg" alt=""/>
                        <div className="intro_bottom-hr"></div>
                    </div>

                </li>
                <li>
                    <div className={bottomVisible ? "visible" : ""}>
                        <img className="pc_intro" src="/intro-img/intro4.svg" alt=""/>
                        <div className="mo_intro">
                            <img src="/intro-img/mo_intro1-1.svg" alt=""/>
                        </div>
                        <h1>telling stories</h1>
                        <img className="symbol" src="/intro-img/symbol_2.svg" alt=""/>
                        <h1>through visuals</h1>
                    </div>
                </li>
            </ul>
        </section>
    )

};
export default Intro;