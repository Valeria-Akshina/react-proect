import style from './style/index.module.css';
import { useEffect } from 'react';

export const ModalFirst = ({ isOpen, onClose }) => {
useEffect(() => {
    const handleEscape = (e) => {
    if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    }
    
    return () => {
    document.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = 'unset';
    };
}, [isOpen, onClose]);

if (!isOpen) return null;

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма отправлена');
    onClose();
};

return (
    <div className={style.modalOverlay} onClick={onClose}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeButton} onClick={onClose}>
            ×
        </button>
        <form className={style.form} onSubmit={handleSubmit}>
            <h2 className={style.title}>
            Оставить заявку на консультацию
            </h2>
            <p className={style.description}>
            Оставьте заявку – и наш менеджер свяжется с вами, узнает ваши потребности и предложит идеальный<br />
            погрузчик под ваши задачи.
            </p>
            <div className={style.inputRow}>
            <input 
                type="text" 
                placeholder="Имя"
                className={style.input}
            />
            <input 
                type="tel" 
                placeholder="Телефон"
                className={style.input}
            />
            <input 
            type="email" 
            placeholder="Email"
            className={style.input}
            required
            />
        </div>
        <textarea 
            placeholder="Комментарий"
            className={style.textarea}
            rows="4"
        />
        <div className={style.bottomRow}>
            <button type="submit" className={style.submitButton}>
            Отправить
            </button>
            <p className={style.privacyText}>
            Нажимая кнопку «Отправить», вы соглашаетесь с Политикой конфиденциальности
            </p>
        </div>
        </form>
    </div>
    </div>
);    
};