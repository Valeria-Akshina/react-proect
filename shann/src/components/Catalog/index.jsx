import style from './style/index.module.css';
import { Card } from '../Card';

import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';

const cardsData = [
    {
        id: 1,
        image: img1,
        title: "CPD 20",
        specifications: [
        { label: "Тип двигателя", value: "Электрический" },
        { label: "Грузоподъемность", value: "1 т" },
        { label: "Высота подъема", value: "3-6 м" }
        ]
    },
    {
        id: 2,
        image: img2,
        title: "CPD 25",
        specifications: [
        { label: "Тип двигателя", value: "Электрический" },
        { label: "Грузоподъемность", value: "1 т" },
        { label: "Высота подъема", value: "3-6 м" }
        ]
    },
    {
        id: 3,
        image: img3,
        title: "CPD 30",
        specifications: [
        { label: "Тип двигателя", value: "Электрический" },
        { label: "Грузоподъемность", value: "1 т" },
        { label: "Высота подъема", value: "3-6 м" }
        ]
    },
    {
        id: 4,
        image: img4,
        title: "CPD 35",
        specifications: [
        { label: "Тип двигателя", value: "Дизельный" },
        { label: "Грузоподъемность", value: "1 т" },
        { label: "Высота подъема", value: "3-6 м" }
        ]
    },
    {
        id: 5,
        image: img5,
        title: "CPD 50 MINI",
        specifications: [
        { label: "Тип двигателя", value: "Дизельный" },
        { label: "Грузоподъемность", value: "1 т" },
        { label: "Высота подъема", value: "3-6 м" }
        ]
    },
    {
        id: 6,
        image: img6,
        title: "CPD 50",
        specifications: [
        { label: "Тип двигателя", value: "Электрический" },
        { label: "Грузоподъемность", value: "1 т" },
        { label: "Высота подъема", value: "3-6 м" }
        ]
    },
    {
        id: 7,
        image: img6,
        title: "CPD 70",
        specifications: [
        { label: "Тип двигателя", value: "Электрический" },
        { label: "Грузоподъемность", value: "1 т" },
        { label: "Высота подъема", value: "3-6 м" }
        ]
    },
    {
        id: 8,
        image: img6,
        title: "CPD 80",
        specifications: [
        { label: "Тип двигателя", value: "Электрический" },
        { label: "Грузоподъемность", value: "1 т" },
        { label: "Высота подъема", value: "3-6 м" }
        ]
    },
    {
        id: 9,
        image: img9,
        title: "CPD 100",
        specifications: [
        { label: "Тип двигателя", value: "Электрический" },
        { label: "Грузоподъемность", value: "1 т" },
        { label: "Высота подъема", value: "3-6 м" }
        ]
    },
    {
        id: 10,
        image: img10,
        title: "SPECIAL",
        isTriple: true,
        isSpecial: true
    }
];

export const Catalog = () => {
    return (
    <section className={style.catalog}>
        <div className={style.catalog__block}>
            <span className={style.catalog__p}>
            каталог<span className={style.catalog__p__blue}>погрузчиков</span>
            </span>
            <div className={style.block__cards}>
            {cardsData.map(card => (
                <Card
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    specifications={card.specifications}
                    isTriple={card.isTriple}
                    isSpecial={card.isSpecial}
                />
            ))}
            </div>
        </div>
    </section>
    );
};