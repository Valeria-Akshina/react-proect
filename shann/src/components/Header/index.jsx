import style from './style/index.module.css'
import logo from '../../assets/images/logo.png'
import phone from '../../assets/icon/phone.png'


export const Header = () => {
    return (
            <header className={style.header}>
        <div className={style.header__logo}>
            <img src={logo} alt="#" />
        </div>
        <div className={style.header__block}>
            <p className={style.block__phone}>8 800 555 80 80</p>
            <button className={style.block__btn__blue}>Заказать звонок</button>
        </div>

        <button className={style.mobile__phone__btn}>
            <img src={phone} alt="#" />
        </button>
    </header>
    )
} 