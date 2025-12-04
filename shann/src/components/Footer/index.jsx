import style from './style/index.module.css'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <p className={style.footer__textBlackTrans}>© « Все права защищены</p>
            <a className={style.footer__link} href="#">Политика конфиденциальности</a>
    <div className={style.footer__item}>
        <span className={style.footer__textBlack}>Телефон:</span>
        <span className={style.footer__textBlackTrans}>8 800 555 80 80</span>
    </div>
    <div className={style.footer__item}>
        <span className={style.footer__textBlack}>E-mail:</span>
        <span className={style.footer__textBlackTrans}>index@gmail.com</span>
    </div>
        </footer>
    )
}