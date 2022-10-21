import s from "./PriceAndButton.module.scss";

const PriceAndButton = ({price, onPearce}) => {
    return (
        <div className={s.priceAndButton}>
            {price !== null &&
                <div>
                    <label className={s.price}>{price} ₽</label>
                    <label className={s.onPearce}>{onPearce} р на причале</label>
                </div>
            }
            <button className={s.button}>
                Подробнее
            </button>
        </div>
    );
};

export default PriceAndButton;