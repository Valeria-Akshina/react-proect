import style from './style/index.module.css'
import video from './imges/video.png'

export const Video = () => {
    return (
        <section className={style.sectionVideo}>
            <p className={style.sectionVideo__heading}>проверенное<p className={style.sectionVideo__headingBlue}> качество</p></p>
            <div className={style.sectionVideo__video}>
                <img className={style.sectionVideo__video__img} src={video} alt="#" />
                <button className={style.sectionVideo__video__pleer}></button>
            </div>
        </section>
    )
}