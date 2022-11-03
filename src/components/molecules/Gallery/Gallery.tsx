// Disabling this rule because google maps do not provide alt text for their images
/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
import { uid } from 'uid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import styles from './Gallery.module.scss';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Gallery.css';

interface IGalleryProps {
  name: string;
  images: string[];
}

const Gallery: FC<IGalleryProps> = ({ images, name }) => {
  return (
    <Swiper
      className={styles.Gallery}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Pagination, Navigation]}
    >
      {images.map((image) => (
        <SwiperSlide key={uid()}>
          <img className={styles.Gallery__Img} src={image} />
        </SwiperSlide>
      ))}
      <p className={styles.Gallery__Name}>
        <b>{name}</b>
      </p>
    </Swiper>
  );
};

export default Gallery;
