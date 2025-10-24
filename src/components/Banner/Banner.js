import React from "react";
import "./Banner.css"

const Banner = () => {
    return (
        <section className="banner">
            <video src={`${process.env.PUBLIC_URL}/banner-img/banner.mp4`} autoPlay muted loop></video>
        </section>
    )
};

export default Banner;