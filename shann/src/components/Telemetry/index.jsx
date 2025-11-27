import style from './style/index.module.css';
import telemetry from '../../assets/images/telemetry.png';

export const Telemetry = () => {
    return (
        <section className={style.sectionTwo}>
            <div className={style.sectionTwo__block__list}>
                <img className={style.sectionTwo__img} src={telemetry} alt="#" />
                    <div className={style.sectionTwo__list}>
                    <span className={style.section__list__p}>оснащение системой <br />
                        <span className={style.list__p__blue}>телеметрии</span></span>
                    <ul className={style.list}>
                        <li>BMS (Battery Management System) - система управления <br />
                        батареей с возможностью онлайн мониторинга со <br />смартфона</li>
                        <li>Система доступа операторов к погрузчику</li>
                        <li>Развернутый отчет об эксплуатации техники</li>
                        <li>Оповещение о предстоящем ТО</li>
                        <li>Контроль учета рабочего времени</li>
                        <li>Геолокация погрузчика</li>
                        <li>Фиксация нарушений скоростных ограничений</li>
                    </ul>
                    </div>
            </div>
        </section>
    )
}