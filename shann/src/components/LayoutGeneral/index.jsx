import style from './style/index.module.css'

export const LayoutGeneral = ({ children }) => {
    return (
        <div>
            <div className={style.layout}>
            {children}
            </div>
        </div>
    )
}