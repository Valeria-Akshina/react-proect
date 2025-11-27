import style from './style/index.module.css';
import { useState } from 'react';
import { Modal } from '../Modal/index.jsx';

export const Card = ({ 
  image, 
  title, 
  specifications = [],
  isTriple = false,
  isSpecial = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isSpecial) {
    return (
      <>
        <div className={`${style.card} ${style.card__special} ${isTriple ? style.card__triple : ''}`}>
          <div className={style.special__container}>
            <div className={style.special__image__container}>
              <img src={image} alt="Специальное предложение" className={style.special__image} />
            </div>
            
            <div className={style.special__content}>
              <h3 className={style.special__title}>
                Интересует дизельный<br />или газобензиновый погрузчик?
              </h3>
              <button className={style.special__button} onClick={handleOpenModal}>
                получить предложение
              </button>
            </div>
          </div>
        </div>

        <Modal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={{ image, title, specifications }}
        />
      </>
    );
  }
  return (
    <>
      <div className={style.card}>
        <img src={image} alt={title} className={style.card__image} />
        
        <div className={style.card__description}>
          <h3 className={style.card__title}>{title}</h3>
          
          {specifications.length > 0 && (
            <div className={style.card__specs}>
              {specifications.map((spec, index) => (
                <div key={index} className={style.spec__item}>
                  <span className={style.spec__label}>{spec.label}:</span>
                  <span className={style.spec__value}>{spec.value}</span>
                </div>
              ))}
            </div>
          )}
          
          <button className={style.card__button} onClick={handleOpenModal}>
            получить предложение
          </button>
          
          <a href='#' className={style.card__link}>
            подробные характеристики
          </a>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={{ image, title, specifications }}
      />
    </>
  );
};