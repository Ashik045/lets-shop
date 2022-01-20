import React from 'react';
import { BiSearch } from 'react-icons/bi';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
// import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import sfive from '../../image/sfive.jpg';
import sone from '../../image/sone.jpg';
import sseven from '../../image/sseven.jpg';
import ssix from '../../image/ssix.jpg';
import './header.css';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

const Header = () => (
    <div className="header ">
        <div className="search_sec container">
            <div className="search_inp">
                <input className="search_inpp" type="text" placeholder="Search" />
                <BiSearch size={26} className="search_icon" />
            </div>

            <h2>
                Collect your next <br /> favorite custom dress.
            </h2>
        </div>

        <div className="slider_sec">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                effect="fade"
                loop
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={ssix} alt="ss" className="cmnImg" />

                    <div className="imgTxt">
                        <h2 className="cmnHtxt">
                            customer <br /> satisfaction
                        </h2>
                        <h5 className="cmnDtxt">stay closed to our trusted online shop.</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sfive} alt="sss" className="cmnImg" />
                    <div className="imgTxt">
                        <h2 className="cmnHtxt">
                            quality <br /> material
                        </h2>
                        <h5 className="cmnDtxt">our product is one of the best quality product.</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sseven} alt="ssss" className="cmnImg" />
                    <div className="imgTxt">
                        <h2 className="cmnHtxt">
                            money back <br /> guarantee
                        </h2>
                        <h5 className="cmnDtxt">
                            if you are not satisfied. we will back your money.
                        </h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sone} alt="ss" className="cmnImg" />
                    <div className="imgTxt2">
                        <h2 className="cmnHtxt">
                            customer <br /> satisfaction
                        </h2>
                        <h5 className="cmnDtxt">stay closed to our trusted online shop.</h5>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
);

export default Header;
