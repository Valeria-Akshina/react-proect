import style from './style/index.module.css';
import phone from '../../assets/icon/phone.png';
import car from '../../assets/images/electric-vehicle.png'

export const FirstMain = () => {
    return (
        <main className={style.main}>
            <div className={style.main__blockOne}>
                <div className={style.blockOne__text}>
                    <h1>электромобильный <br />
                    вилочный погрузчик <br /> 
                    <h1>нового поколения SHANN</h1></h1>
                    <p>Оставьте заявку и получите 
                    консультацию специалиста</p>
                </div>
                <div className={style.blockOne__buttons}>
                    <button className={style.blockOne__btn__blue}>
                        Получить предложение
                    </button>
                    <button className={style.blockOne__btn__transparent}>
                        <img src={phone} alt="#" />
                        Перезвоним в течении дня для консультации
                    </button>
                </div>
            </div>
            <div className={style.main__blockTwo}>
                <img src={car} alt="#" />
            </div>
        </main>
    )
}