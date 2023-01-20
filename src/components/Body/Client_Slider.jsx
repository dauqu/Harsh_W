import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import node from "../assets/images/node.svg";
import mongo from "../assets/images/mongo.svg";
import flutter from "../assets/images/flutter.svg";
import vue from "../assets/images/vue.svg";
import dart from "../assets/images/dart.svg";
import laravel from "../assets/images/laravel.svg";
import tailwindcss from "../assets/images/tailwindcss.svg";
import react from "../assets/images/react.svg";
import django from "../assets/images/django.svg";
import python from "../assets/images/python5.svg";
import angular from "../assets/images/angular.svg";
import spring from "../assets/images/spring3.svg";
import docker from "../assets/images/docker.svg";
import sql from "../assets/images/sql.svg";
import c from "../assets/images/c.svg";
import js from "../assets/images/js.svg";
import db from "../assets/images/db.svg";
import css from "../assets/images/css.svg";
import kotlin from "../assets/images/kotlin.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

function Client_Slider() {
  return (
    <div>
      <div className="mt-16 w-[90%] m-auto">
        <div className="text-center text-black font-bold text-[35px]">
          What our clients say
        </div>
        <div className="md:p-12 p-4 md:mb-0 mb-8 m-auto ">
          <div>
            <Swiper
              pagination={true}
              slidesPerView={3}
              className="mySwiper cursor-pointer"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 70,
                },
              }}
            >
              <SwiperSlide>
                <div className="w-[300px]">
                  <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
                    " Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum.Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram. "
                  </div>
                  <div className="py-2 font-bold text-black text-[20px]">
                    Bushra Ahsani
                  </div>
                  <div className="text-[14px]">CEO, Home Limited</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[300px]">
                  <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
                    " Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum.Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram. "
                  </div>
                  <div className="py-2 font-bold text-black text-[20px]">
                    Bushra Ahsani
                  </div>
                  <div className="text-[14px]">CEO, Home Limited</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[300px]">
                  <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
                    " Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum.Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram. "
                  </div>
                  <div className="py-2 font-bold text-black text-[20px]">
                    Bushra Ahsani
                  </div>
                  <div className="text-[14px]">CEO, Home Limited</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[300px]">
                  <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
                    " Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum.Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram. "
                  </div>
                  <div className="py-2 font-bold text-black text-[20px]">
                    Bushra Ahsani
                  </div>
                  <div className="text-[14px]">CEO, Home Limited</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[300px]">
                  <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
                    " Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum.Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram. "
                  </div>
                  <div className="py-2 font-bold text-black text-[20px]">
                    Bushra Ahsani
                  </div>
                  <div className="text-[14px]">CEO, Home Limited</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[300px]">
                  <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
                    " Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum.Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram. "
                  </div>
                  <div className="py-2 font-bold text-black text-[20px]">
                    Bushra Ahsani
                  </div>
                  <div className="text-[14px]">CEO, Home Limited</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[300px]">
                  <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
                    " Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum.Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram. "
                  </div>
                  <div className="py-2 font-bold text-black text-[20px]">
                    Bushra Ahsani
                  </div>
                  <div className="text-[14px]">CEO, Home Limited</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="md:px-24  ">
          <div>
            <Swiper
              pagination={true}
              slidesPerView={7}
              className="mySwiper cursor-pointer"
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 60,
                },
                1280: {
                  slidesPerView: 7,
                  spaceBetween: 70,
                },
              }}
            >
              <SwiperSlide className="flex  ">
                <img src={node} alt="node" className="w-20 h-20" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={mongo} alt="mongo" className="w-20 h-20" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={flutter} alt="flutter" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={docker} alt="vue" className="w-16 h-16" />
              </SwiperSlide>

              <SwiperSlide className="flex ">
                <img src={c} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={css} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={js} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={kotlin} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={vue} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={dart} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={db} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={laravel} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={react} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={tailwindcss} alt="vue" className="w-16 h-16" />
              </SwiperSlide>

              <SwiperSlide className="flex ">
                <img src={django} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={python} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={sql} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={angular} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
              <SwiperSlide className="flex ">
                <img src={spring} alt="vue" className="w-16 h-16" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client_Slider;
