import style from './style/index.module.css';
import engine from './img/engine.png'

export const Engine = () => {
  return (
    <section className={style.section}>
      <div className={style.section__flex}>
        <div className={style.section__list}>
          <span className={style.list__p__wnite}>двигатель<span className={style.list__p__whitTran}> и АКБ</span></span>
          <ul className={style.list}>
            <li>1,5 часа составляет время зарядки</li>
            <li>Однократная потребляемая мощность АКБ 
            15 кВт/ч <br /> (30% экономия затрат на электроэнергию)</li>
            <li>Интеллектуальный контроль температуры</li>
            <li>Синхронный двигатель с постоянными магнитами</li>
            <li>Несколько режимов работы: ECO, STANDARD, POWER</li>
          </ul>
      </div>
      <img className={style.sectionTwo__list} src={engine} alt="#" />
      </div>
    </section>
  )
}
