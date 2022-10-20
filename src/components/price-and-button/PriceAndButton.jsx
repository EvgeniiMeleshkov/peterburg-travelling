import s from "./PriceAndButton.module.scss";

const PriceAndButton = () => {
    return (
        <div className={s.priceAndButton}>
            <div>
                <label className={s.price}>900 ₽</label>
                <label className={s.onPearce}>1200 р на причале</label>
            </div>
            <button className={s.button}>
                Подробнее
            </button>
        </div>
    );
};

export default PriceAndButton;