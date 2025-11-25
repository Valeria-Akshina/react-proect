import style from './style/index.module.css';
import atTheFront from './imges/electroOne.png';
import fromBehind from './imges/electroTwo.png'

export const ElectricVehicleTechnology = () => {
    return (
        <section className={style.main}>
            <div className={style.main__text}>
                <span>эволюционные <span className={style.main__text__blue}>технологии</span></span>
                <p>Технологии электромобиля в вилочном погрузчике</p>
            </div>
            <div className={style.main__images}>
                <img src={atTheFront} alt="at the front" />
                <img src={fromBehind} alt="from behind" />
            </div>
        </section>
    )
}