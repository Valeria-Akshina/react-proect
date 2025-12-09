import style from './style/index.module.css';
import { useState } from 'react';
import atTheFront from './imges/electroOne.png';
import fromBehind from './imges/electroTwo.png';
import elips from '../../assets/icon/Ellipse 70.png';

export const ElectricVehicleTechnology = () => {
    const [openModal, setOpenModal] = useState(null);

    const modalsData = [
        {
            id: 1,
            text: "Степень защиты IP65",
            width: "220px",
            height: "70px",
            top: "429px",
            left: "610px",
            position: "left"
        },
        {
            id: 2,
            text: "Температура рабочей среды -40 до +40",
            width: "231px",
            height: "85px",
            top: "637px",
            left: "716px",
            position: "left"
        },
        {
            id: 3,
            text: "Корпус изготовлен из высокопрочной стали",
            width: "228px",
            height: "90px",
            top: "350px",
            left: "1157px",
            position: "right"
        },
        {
            id: 4,
            text: "Уникальная система рекуперации энергии торможения и энергии инерции",
            width: "367px",
            height: "90px",
            top: "730px",
            left: "1022px",
            position: "right"
        }
    ];

    const handleMouseEnter = (id) => {
        setOpenModal(id);
    };

    const handleMouseLeave = () => {
        setOpenModal(null);
    };

    return (
        <section className={style.main}>
            <div className={style.main__text}>
                <span>эволюционные <span className={style.main__text__blue}>технологии</span></span>
                <p>Технологии электромобиля в вилочном погрузчике</p>
            </div>
            <div className={style.main__images}>
                <img className={style.main__images__atTheFront} src={atTheFront} alt="at the front" />
                <img className={style.main__images__fromBehind} src={fromBehind} alt="from behind" />
            </div>
            
            {modalsData.map(modal => (
                <div 
                    key={modal.id}
                    className={`${style.ellipseContainer} ${
                        modal.position === 'right' ? style.positionRight : style.positionLeft
                    }`}
                    style={{ top: modal.top, left: modal.left }}
                    onMouseEnter={() => handleMouseEnter(modal.id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img 
                        className={style.ellipse} 
                        src={elips} 
                        alt={`Эллипс ${modal.id}`}
                    />
                    
                    {openModal === modal.id && (
                        <div 
                            className={`${style.modal} ${
                                modal.position === 'right' ? style.modalRight : style.modalLeft
                            }`}
                            style={{ 
                                width: modal.width, 
                                height: modal.height 
                            }}
                        >
                            <p className={style.modalText}>{modal.text}</p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}