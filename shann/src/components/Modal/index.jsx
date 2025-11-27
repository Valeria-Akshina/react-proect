import style from './style/index.module.css';
import { useEffect } from 'react';

export const Modal = ({ isOpen, onClose, product }) => {
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

    return (
        <div className={style.modalOverlay} onClick={onClose}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
            <button className={style.closeButton} onClick={onClose}>
            ×
            </button>
            
            <div className={style.modalContent}>
            <div className={style.productInfo}>
                <img src={product.image} alt={product.title} className={style.productImage} />
                <h2 className={style.productTitle}>{product.title}</h2>
                
                <div className={style.specifications}>
                <div className={style.specList}>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Свободный ход:</span>
                    <span className={style.specValue}>172 мм</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Длина (без вил):</span>
                    <span className={style.specValue}>3640 мм</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Длина (без вил):</span>
                    <span className={style.specValue}>3640 мм</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Высота верхнего ограждения:</span>
                    <span className={style.specValue}>2500 мм</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Внешний радиус поворота:</span>
                    <span className={style.specValue}>3580 мм</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Масса:</span>
                    <span className={style.specValue}>10 000 кг</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Шины передние:</span>
                    <span className={style.specValue}>8.25-15-14PR</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Шины поворотные:</span>
                    <span className={style.specValue}>8.25-15-14PR</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Тип электродвигателя:</span>
                    <span className={style.specValue}>Синхронный двигатель с постоянными магнитами</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Тип АКБ:</span>
                    <span className={style.specValue}>LiFePO4</span>
                    </div>
                    <div className={style.specItem}>
                    <span className={style.specLabel}>Аккумулятор:</span>
                    <span className={style.specValue}>345V/230AH</span>
                    </div>
                </div>
                </div>
            </div>
            <div className={style.formContainer}>
                <h3 className={style.formTitle}>Оставить заявку</h3>
                
                <form className={style.form}>
                <input 
                    type="text" 
                    placeholder="Имя"
                    className={style.input}
                    required
                />
                
                <input 
                    type="tel" 
                    placeholder="Телефон"
                    className={style.input}
                    required
                />
                
                <input 
                    type="email" 
                    placeholder="Email"
                    className={style.input}
                    required
                />
                
                <textarea 
                    placeholder="Комментарий"
                    className={style.textarea}
                    rows="4"
                />
                
                <button type="submit" className={style.submitButton}>
                    Оставить заявку
                </button>
                
                <p className={style.privacyText}>
                    Нажимая кнопку «Оставить заявку», вы соглашаетесь с Политикой конфиденциальности
                </p>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
    };