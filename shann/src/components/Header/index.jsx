import style from './style/index.module.css'
import logo from '../../assets/images/logo.png'


export const Header = () => {
    return (
            <header className={style.header}>
        <div className={style.header__logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={style.header__block}>
            <p className={style.block__phone}>8 800 555 80 80</p>
            <button className={style.block__btn__blue}>Заказать звонок</button>
        </div>
    </header>
    )
} 