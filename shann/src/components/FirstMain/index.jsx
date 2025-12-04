import style from './style/index.module.css';
import { useState } from 'react';
import phone from '../../assets/icon/phone.png';
import car from '../../assets/images/electric-vehicle.png';
import { ModalFirst } from '../ModalFirst/index.jsx';

export const FirstMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <main className={style.main}>
                <div className={style.main__blockOne}>
                    <div className={style.blockOne__text}>
                        <span>электромобильный <br />
                        вилочный погрузчик <br /> 
                        <span className={style.span__blue}>нового поколения SHANN</span></span>
                        <p>Оставьте заявку и получите 
                        консультацию специалиста</p>
                    </div>
                    <div className={style.blockOne__buttons}>
                        <button 
                            className={style.blockOne__btn__blue}
                            onClick={handleOpenModal}
                        >
                            Получить предложение
                        </button>
                        <button className={style.blockOne__btn__transparent}>
                            <img src={phone} alt="#" />
                            <span>Перезвоним в течении дня для консультации</span>
                        </button>
                    </div>
                </div>
                <img className={style.main__blockTwo} src={car} alt="#" />
            </main>

            <ModalFirst 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )
}