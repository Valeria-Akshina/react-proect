import style from './style/index.module.css'
import car from '../../assets/images/electric-from-behind.png'

export const Connection = () => {
    return (
        <section className={style.section}>
            <div className={style.section__blockInput}>
                <div className={style.section__blockInput__text}>
                    <span className={style.text__white}>связаться <span className={style.text__whiteTrans}>с нами</span></span>
                    <p className={style.text__pWhite}>Оставьте заявку – и наш менеджер свяжется с вами, узнает ваши потребности 
                        и предложит <br /> идеальный погрузчик под ваши задачи</p>
                </div>
                <div className={style.section__blockInput__input}>
                    <div className={style.blockInput__inputRow}>
                        <input className={style.input} type="text" placeholder='Имя' />
                        <input className={style.input} type="number" placeholder='Телефон' />
                    </div>
                    <input className={style.inputBold} type="text" placeholder='Комментарий' />
                </div>
                <div className={style.section__blockInput__btn}>
                    <button className={style.blockInput__btn__blue}>Отправить заявку</button>
                    <span className={style.blockInput__btn__text}>Нажимая кнопку «Отправить заявку», вы <br />
                    соглашаетесь с Политикой конфиденциальности</span>
                </div>
                <span className={style.blockInput__footerText}>Или позвоните по телефону:<span className={style.blockInput__footerTextBold}>8 800 555 80 80</span></span>
            </div>
            <div className={style.section__blockImg}>
                <img className={style.img} src={car} alt="#" />
            </div>
        </section>
    )
}