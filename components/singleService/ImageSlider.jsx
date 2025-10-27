"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ service }) => {
    const images = [
        "/Assets/gallery/tunnel/tunnel1.jpg",
        "/Assets/gallery/tunnel/tunnel2.jpg",
        "/Assets/gallery/tunnel/tunnel3.jpg",
        "/Assets/gallery/tunnel/tunnel4.jpg",
        "/Assets/gallery/tunnel/tunnel5.jpg",
        "/Assets/gallery/tunnel/tunnel6.jpg",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 tracking-wide">
                    SITE PHOTOGRAPHS
                </h2>
                <Slider {...settings}>
                    {service?.images?.map((img, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={img}
                                    alt={`Site ${index + 1}`}
                                    className="w-full h-56 object-cover md:h-60 lg:h-64"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ImageSlider;
