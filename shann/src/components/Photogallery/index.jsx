import style from './style/index.module.css';
import { useState } from 'react';

import gallery1 from './images/center.png';
import gallery2 from './images/right.png';
import gallery3 from './images/right.png';
import gallery4 from './images/right.png';
import gallery5 from './images/right.png';
import gallery6 from './images/right.png';
import gallery7 from './images/left.png';
import gallery8 from './images/left.png';
import gallery9 from './images/left.png';
import gallery10 from './images/left.png';
import gallery11 from './images/left.png';
import gallery12 from './images/left.png';

export const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
    gallery7, gallery8, gallery9, gallery10, gallery11, gallery12
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <section className={style.gallery}>
      <div className={style.gallery__container}>
        <h2 className={style.gallery__title}>фотогалерея</h2>
        <div className={style.gallery__content}>
          <div className={style.sideImage}>
            <img 
              src={images[getPreviousIndex()]} 
              alt="Предыдущее фото" 
              className={style.sideImage__img}
            />
          </div>
          <div className={style.mainImage}>
            <img 
              src={images[currentIndex]} 
              alt={`Фото ${currentIndex + 1}`} 
              className={style.mainImage__img}
            />
          </div>
          <div className={style.sideImage}>
            <img 
              src={images[getNextIndex()]} 
              alt="Следующее фото" 
              className={style.sideImage__img}
            />
          </div>
        </div>
        <div className={style.navigation}>
          <button className={style.navButton} onClick={prevImage}>
            &lt;
          </button>
          <span className={style.counter}>
            <p className={style.counter__p__blue}>{currentIndex + 1}</p>/<p>{images.length}</p>
          </span>
          <button className={style.navButton} onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};