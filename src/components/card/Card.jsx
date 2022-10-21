import s from './card.module.scss'
import Content from "../content/Content";
import PictureStaff from "../picture-compt/PictureStaff";
import Advertisement from "../common/advertisment/Advertisement";
import Departures from "../common/departures/Departures";
import PriceAndButton from "../price-and-button/PriceAndButton";

const Card = ({price, onPearce, picture, pictureLabelText, labelText, labelVariant, eventsContent}) => {

    return (
        <div className={s.cardContainer}>
            <div>
                <PictureStaff
                    picture={picture}
                    pictureLabelText={pictureLabelText}
                    labelText={labelText}
                    labelVariant={labelVariant}
                />
            </div>
            <div>
                <Advertisement/>
                <div className={s.descriptionContainer}>
                    {eventsContent.map(el => {
                        return <Content key={el.id} contentText={el.text}/>
                    })}
                </div>
                <Departures/>
                <PriceAndButton price={price} onPearce={onPearce}/>
            </div>

        </div>
    );
};

export default Card;