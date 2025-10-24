import React, {useEffect, useRef, useState} from "react";
import "./Product.css"

const Product = () => {
    const topRef = useRef(null);
    const middleRef = useRef(null);
    const bottomRef = useRef(null);

    const [topVisible, setTopVisible] = useState(false);
    const [middleVisible, setMiddleVisible] = useState(false);
    const [bottomVisible, setBottomVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (topRef.current) {
                if (scrollY > topRef.current.offsetTop - 100) {
                    setTopVisible(true);
                } else {
                    setTopVisible(false);
                }
            }

            if (middleRef.current) {
                if (scrollY > middleRef.current.offsetTop - 120) {
                    setMiddleVisible(true);
                } else {
                    setMiddleVisible(false);
                }
            }

            if (bottomRef.current) {
                if (scrollY > bottomRef.current.offsetTop - 100) {
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
        <section className="product acontent">
            {/*콜라보 라인업*/}
            <div className="product_top" ref={topRef}>
                <h4>Limited Line-up</h4>
                <div className="product_inner">
                    <ul className={`product_list ${topVisible ? "visible" : ""}`}>
                        <li><img src={`${process.env.PUBLIC_URL}/product-img/era2.svg`} alt=""/></li>
                        <li>MINI 2 ERA Limited</li>
                        <li>
                            <button>Shop Now</button>
                        </li>
                        <li>₩160,000</li>
                    </ul>
                    <ul className={`product_list ${topVisible ? "visible" : ""}`}>
                        <li><img src={`${process.env.PUBLIC_URL}/product-img/era3.svg`} alt=""/></li>
                        <li>MINI 3 ERA Limited</li>
                        <li>
                            <button>Shop Now</button>
                        </li>
                        <li>₩190,000</li>
                    </ul>
                    <ul className={`product_list ${topVisible ? "visible" : ""}`}>
                        <li><img src={`${process.env.PUBLIC_URL}/product-img/retro2.svg`} alt=""/></li>
                        <li>MINI 2 RETRO Limited</li>
                        <li>
                            <button>Shop Now</button>
                        </li>
                        <li>₩140,000</li>
                    </ul>
                    <ul className={`product_list ${topVisible ? "visible" : ""}`}>
                        <li><img src={`${process.env.PUBLIC_URL}/product-img/retro3.svg`} alt=""/></li>
                        <li>MINI 3 RETRO Limited</li>
                        <li>
                            <button>Shop Now</button>
                        </li>
                        <li>₩160,000</li>
                    </ul>
                </div>
            </div>
            {/*첫번째 콜라보제품 소개*/}
            <div className="product_middle" ref={middleRef}>
                <div className="middle_wrap">
                    <div className="middle_inner">
                        <ul className={`middle_list middle_left ${middleVisible ? "visible" : ""}`}>
                            <li><img src={`${process.env.PUBLIC_URL}/product-img/era2shadow.svg`} alt=""/></li>
                            <li>MINI 2 ERA</li>
                            <li>KODACK X BLACKPINK</li>
                            <li>코닥 미니2 ERA 포토프린터 사진인화기</li>
                            <li>₩160,000</li>
                            <li>
                                <ul>
                                    <li>
                                        <button>Shop Now</button>
                                    </li>
                                    <li>Color</li>
                                    <li><img src={`${process.env.PUBLIC_URL}/product-img/blackpink.svg`} alt=""/></li>
                                    <li><img src={`${process.env.PUBLIC_URL}/product-img/black.svg`} alt=""/></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="main_image"><img src={`${process.env.PUBLIC_URL}/product-img/colabo1.png`} alt=""/></div>
                        <div className="middle_bg">
                            <img src={`${process.env.PUBLIC_URL}/product-img/middle_bg.jpg`} alt=""/>
                        </div>
                        <ul className={`middle_list middle_right ${middleVisible ? "visible" : ""}`}>
                            <li><img src={`${process.env.PUBLIC_URL}/product-img/era3shadow.svg`} alt=""/></li>
                            <li>MINI 3 ERA</li>
                            <li>KODACK X BLACKPINK</li>
                            <li>코닥 미니3 ERA 포토프린터 사진인화기</li>
                            <li>₩190,000</li>
                            <li>
                                <ul>
                                    <li>Color</li>
                                    <li><img src={`${process.env.PUBLIC_URL}/product-img/blackpink.svg`} alt=""/></li>
                                    <li><img src={`${process.env.PUBLIC_URL}/product-img/black.svg`} alt=""/></li>
                                    <li>
                                        <button>Shop Now</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*두번째 콜라보제품 소개*/}
            <div className="product_bottom" ref={bottomRef}>
                <h2>Other Collaboration</h2>
                <div className="bottom_wrap">
                    <img className="bottom_image" src={`${process.env.PUBLIC_URL}/product-img/colabo2.png`} alt=""/>
                    <ul className={`bottom_list ${bottomVisible ? "visible" : ""}`}>
                        <li><img src={`${process.env.PUBLIC_URL}/product-img/retro3shadow.svg`} alt=""/></li>
                        <li>MINI 3 RETRO</li>
                        <li>KODACK X BLACKPINK</li>
                        <li>코닥 미니3 레트로 포토프린터 사진인화기</li>
                        <li>₩160,000</li>
                        <li>
                            <ul>
                                <li>Color</li>
                                <li><img src={`${process.env.PUBLIC_URL}/product-img/blackpink.svg`} alt=""/></li>
                                <li><img src={`${process.env.PUBLIC_URL}/product-img/black.svg`} alt=""/></li>
                                <li>
                                    <button>Shop Now</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )

};
export default Product;