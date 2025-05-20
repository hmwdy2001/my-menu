
// export default function Slider({arry}){
//     const showItems = arry.map((item)=>{
//         return (
//             <div key={item.img} className="card">
                
//                 <img src={item.img} alt={"img " + item.name } />
                
//                 <div className="item-info">
//                     <div className="name">
//                         <h2>{item.name}</h2>
//                         <p>{item.price}</p>
//                     </div>

//                     <p>{item.discption}</p>
//                 </div>
            
//             </div>
//         )
//     })
//     return (
//     <div>

//         {showItems}
//     </div>)
// }
import React from 'react';
// استيراد مكونات Swiper الأساسية
import { Swiper, SwiperSlide } from 'swiper/react';
// استيراد أنماط Swiper الأساسية
import 'swiper/css';
// استيراد وحدات الأزرار والتنقل (اختياري)
import { Navigation, Pagination } from 'swiper/modules';
// استيراد أنماط الوحدات الإضافية
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CreepSlider({ arry, sect }) {
  return (
    <div className='section'>
      <h2>{sect}</h2>
      <Swiper slidesPerView={'auto'} spaceBetween={30} navigation={false} pagination={{ clickable: false }} modules={[Navigation, Pagination]} dir="rtl" className="mySwiper">
      {arry.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="card">
            <img src={item.img} alt={"صورة " + item.name} />
            <div className="item-info">
              <div className="name">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <p>{item.discption}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      
      <style>
        {`
          .swiper-slide {
            width: auto;
            
          }
          
          .card {
            min-width: 280px;
            width: 280px;
          }
          
          /* أنماط إضافية للتوافق مع التصميم الخاص بك */
          .swiper-button-next, .swiper-button-prev {
            color: #000;
            background: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }
          
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 18px;
          }
          
          .swiper-pagination-bullet-active {
            background: #000;
          }
        `}
      </style>
    </Swiper>
    </div>
  );
}