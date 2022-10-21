import s from "./PriceAndButton.module.scss";

const PriceAndButton = ({price, onPearce}) => {
    return (
        <div className={s.priceAndButtonContainer}>
            {price !== null &&
                <div className={s.priceAndButton}>
                    <label className={s.price}>{price} ₽</label>
                    {onPearce !== null &&
                        <label className={s.onPearce}>{onPearce} р на причале</label>
                    }
                </div>
            }
            <button className={s.button}>
                Подробнее
            </button>
        </div>
    );
};

export default PriceAndButton;