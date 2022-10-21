import s from './card.module.scss'
import Content from "../content/Content";
import Duration from "../common/duration/Duration";
import PictureStaff from "../picture-compt/PictureStaff";
import Advertisement from "../common/advertisment/Advertisement";
import Departures from "../common/departures/Departures";
import PriceAndButton from "../price-and-button/PriceAndButton";

const Card = ({price, onPearce, picture, pictureLabelText, labelText, labelVariant, cardContent}) => {

    return (
        <div className={s.cardContainer}>

            <PictureStaff
                picture={picture}
                pictureLabelText={pictureLabelText}
                labelText={labelText}
                labelVariant={labelVariant}
            />
            <Duration/>
            <Advertisement/>
            <div className={s.descriptionContainer}>
                {cardContent.map(el => {
                    return <Content key={el.id} contentText={el.text}/>
                })}
            </div>
            <Departures/>
            <PriceAndButton price={price} onPearce={onPearce}/>

        </div>
    );
};

export default Card;