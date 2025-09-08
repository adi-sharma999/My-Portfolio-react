import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import first from "../img/1st.jpg";
import second from "../img/2nd.jpg";
import third from "../img/3rd.png";
import fourth from "../img/4th.jpg";
import fifth from "../img/5th.jpg";
import sixth from "../img/6th.jpg";
import seventh from "../img/7th.jpg";
import eighth from "../img/8th.jpg";
import ninth from "../img/9th.jpg";

const Carousel = () => {
  return (
    <div className="w-full py-6 md:py-25">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "oklch(63.7% 0.237 25.331)",
          "--swiper-pagination-color": "oklch(98.5% 0 0)",
          "--swiper-pagination-bullet-inactive-color": "grey",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        className="custom-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex md:flex-row gap-y-3 md:gap-y-0 flex-col justify-center items-center md:h-full gap-x-5 px-10 md:gap-x-10 md:px-20">
            <img
              src={first}
              className="h-full sm:h-75 cursor-pointer"
              alt="Slide 1"
              onClick={() =>
                window.open(
                  "https://www.coursera.org/account/accomplishments/certificate/HWDWPD47YQZ3"
                )
              }
            />
            <div className="flex flex-col text-center md:text-left text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <div className="text-center md:text-left">
                IBM<span className="text-red-500 m-1">.</span>
              </div>
              <div className="text-neutral-500">
                Introduction to Web Development with HTML, CSS, JavaScript
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex md:flex-row gap-y-3 md:gap-y-0 flex-col justify-center items-center md:h-full gap-x-5 px-10 md:gap-x-10 md:px-20">
            <img
              src={second}
              className="h-full sm:h-75 cursor-pointer"
              alt="Slide 2"
              onClick={() =>
                window.open(
                  "https://www.coursera.org/account/accomplishments/certificate/YP422A7K9Q7A"
                )
              }
            />
            <div className="flex flex-col text-center md:text-left text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <div className="text-center md:text-left">
                UC San Diego<span className="text-red-500 m-1">.</span>
              </div>
              <div className="text-neutral-500">Data Structures</div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex md:flex-row gap-y-3 md:gap-y-0 flex-col justify-center items-center md:h-full gap-x-5 px-10 md:gap-x-10 md:px-20">
            <img
              src={third}
              className="h-full sm:h-75 cursor-pointer"
              alt="Slide 3"
              onClick={() =>
                window.open(
                  "https://www.credly.com/badges/a1f5840d-a553-45b7-8910-e95be44288c1/linked_in_profile"
                )
              }
            />
            <div className="flex flex-col text-center md:text-left text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <div className="text-center md:text-left">
                Cisco<span className="text-red-500 m-1">.</span>
              </div>
              <div className="text-neutral-500">
                Introduction to Cybersecurity
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex md:flex-row gap-y-3 md:gap-y-0 flex-col justify-center items-center md:h-full gap-x-5 px-10 md:gap-x-10 md:px-20">
            <img
              src={fourth}
              className="h-full sm:h-75 cursor-pointer"
              alt="Slide 4"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1PtDiLfDKxSn0Ga_aOzDOo8Xch8w1TxJn/view"
                )
              }
            />
            <div className="flex flex-col text-center md:text-left text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <div className="text-center md:text-left">
                Infosys<span className="text-red-500 m-1">.</span>
              </div>
              <div className="text-neutral-500">Programming using Java</div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="flex md:flex-row gap-y-3 md:gap-y-0 flex-col justify-center items-center md:h-full gap-x-5 px-10 md:gap-x-10 md:px-20">
            <img
              src={fifth}
              className="h-full sm:h-75 cursor-pointer"
              alt="Slide 5"
              onClick={() =>
                window.open(
                  "https://www.coursera.org/account/accomplishments/certificate/T9GRS2S94D2H"
                )
              }
            />
            <div className="flex flex-col text-center md:text-left text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <div className="text-center md:text-left">
                Duke University<span className="text-red-500 m-1">.</span>
              </div>
              <div className="text-neutral-500">
                Java Programming: Arrays, Lists, and Structured Data
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <div className="flex md:flex-row gap-y-3 md:gap-y-0 flex-col justify-center items-center md:h-full gap-x-5 px-10 md:gap-x-10 md:px-20">
            <img
              src={sixth}
              className="h-full sm:h-75 cursor-pointer"
              alt="Slide 6"
              onClick={() =>
                window.open(
                  "https://www.coursera.org/account/accomplishments/certificate/F82DDXGLXED7"
                )
              }
            />
            <div className="flex flex-col text-center md:text-left text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <div className="text-center md:text-left">
                UC San Diego<span className="text-red-500 m-1">.</span>
              </div>
              <div className="text-neutral-500">
                Object Oriented Programming in Java
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
          <div className="flex md:flex-row gap-y-3 md:gap-y-0 flex-col justify-center items-center md:h-full gap-x-5 px-10 md:gap-x-10 md:px-20">
            <img
              src={seventh}
              className="h-full sm:h-75 cursor-pointer"
              alt="Slide 7"
              onClick={() =>
                window.open(
                  "https://www.coursera.org/account/accomplishments/certificate/A7SR22XVY9N4"
                )
              }
            />
            <div className="flex flex-col text-center md:text-left text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <div className="text-center md:text-left">
                IBM<span className="text-red-500 m-1">.</span>
              </div>
              <div className="text-neutral-500">
                Introduction to Cloud Computing
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide>
          <div className="flex md:flex-row gap-y-3 md:gap-y-0 flex-col justify-center items-center md:h-full gap-x-5 px-10 md:gap-x-10 md:px-20">
            <img
              src={eighth}
              className="h-full sm:h-75 cursor-pointer"
              alt="Slide 8"
              onClick={() =>
                window.open(
                  "https://www.coursera.org/account/accomplishments/certificate/WEMWBBACCG7B"
                )
              }
            />
            <div className="flex flex-col text-center md:text-left text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <div className="text-center md:text-left">
                UC San Diego<span className="text-red-500 m-1">.</span>
              </div>
              <div className="text-neutral-500">Algorithmic Toolbox</div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 9 */}
        <SwiperSlide>
          <div className="flex md:flex-row gap-y-3 md:gap-y-0 flex-col justify-center items-center md:h-full gap-x-5 px-10 md:gap-x-10 md:px-20">
            <img
              src={ninth}
              className="h-full sm:h-75 cursor-pointer"
              alt="Slide 9"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Q_S4kWbz_xZiH-iugNqHW8ytF1kbZ-GY/view"
                )
              }
            />
            <div className="flex flex-col text-center md:text-left text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <div className="text-center md:text-left">
                Infosys<span className="text-red-500 m-1">.</span>
              </div>
              <div className="text-neutral-500">
                Programming Fundamentals using Python
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
