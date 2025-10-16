import React, {useRef} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Intro from "./components/Intro/Intro";
import Product from "./components/Product/Product";
import LineUp from "./components/LineUp/LineUp";
import AppBanner from "./components/AppBanner/AppBanner";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
    const topRef = useRef(null);
    const introSectionRef = useRef(null);
    const productSectionRef = useRef(null);
    const lineUpSectionRef = useRef(null);
    const gallerySectionRef = useRef(null);

    const handleScroll = (ref) => {
        const isMobile = window.innerWidth <= 480;
        const headerHeight = isMobile ? 68 : 90;

        const elementTop = ref.current.getBoundingClientRect().top;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        window.scrollTo({
            top: elementTop + scrollTop - headerHeight,
            behavior: "smooth",
        });
    };

  return (
      <>
          <Header onMenuClick={(section) => {
              if (section === "top") handleScroll(topRef);
              if (section === "introSection") handleScroll(introSectionRef)
              if (section === "productSection") handleScroll(productSectionRef)
              if (section === "lineUpSection") handleScroll(lineUpSectionRef)
              if (section === "gallerySection") handleScroll(gallerySectionRef)
          }}/>
          <div ref={topRef}></div>
          <Banner/>
          <div ref={introSectionRef}><Intro/></div>
          <div ref={productSectionRef}><Product/></div>
          <div ref={lineUpSectionRef}><LineUp/></div>
          <AppBanner/>
          <div ref={gallerySectionRef}><Gallery/></div>
          <Footer/>
      </>
  );
}

export default App;
