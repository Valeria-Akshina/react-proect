import style from './style/index.module.css';
import engine from './img/engine.png'

export const Engine = () => {
  return (
    <section className={style.section}>
      <div className={style.section__flex}>
        <div className={style.section__list}>
          <span>двигатель<p className={style.list__p__whitTran}> и АКБ</p></span>
          <ul>
            <li>1,5 часа составляет время зарядки</li>
            <li>Однократная потребляемая мощность АКБ 
            15 кВт/ч (30% экономия затрат на электроэнергию)</li>
            <li>Интеллектуальный контроль температуры</li>
            <li>Синхронный двигатель с постоянными магнитами</li>
            <li>Синхронный двигатель с постоянными магнитами</li>
          </ul>
      </div>
      <img src={engine} alt="#" />
      </div>
    </section>
  )
}
