import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Container } from "../../views/Container/Container";
import { Skeleton } from "../Skeleton/Skeleton";
import s from "./SkeletonCard.module.scss";
import cn from "classnames";
import { useState } from "react";

export const SkeletonCard = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className={s.card}>
      <Container className={s.container}>
        <Skeleton className={s.title} />
        <div className={s.picture}>
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            className={s.sliderMain}>
            {[...new Array(4)].map((_, i) => (
              <SwiperSlide className={s.slide} key={`1${i}`}>
                <Skeleton className={s.image} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={s.sliderThumbnails}>
            {[...new Array(5)].map((_, i) => (
              <SwiperSlide className={s.slideThumbnail} key={`2${i}`}>
                <Skeleton className={s.imgThumbnail} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={s.info}>
          <Skeleton className={s.price} />
          <Skeleton className={s.article} />
          <div className={s.characteristics}>
            <Skeleton className={s.characteristicsTitle} />
            <ul className={cn(s.characteristicsTable, s.table)}>
              {[...new Array(5)].map((_, i) => (
                <li className={s.tableRow} key={`3${i}`}>
                  <Skeleton className={s.tableField} />
                  <Skeleton className={s.tableValue} />
                </li>
              ))}
            </ul>

            <div className={s.btns}>
              <Skeleton className={s.btn} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
