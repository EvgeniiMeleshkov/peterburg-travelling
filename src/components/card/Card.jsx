import s from './card.module.scss'
import Content from "../content/Content";
import {cardContent} from '../../common-data/card-content/cardContent'
import Duration from "../common/duration/Duration";
import PictureStaff from "../picture-compt/PictureStaff";
import {labels} from "../../common-data/labels/labels";
import Advertisement from "../common/advertisment/Advertisement";
import Departures from "../common/departures/Departures";
import PriceAndButton from "../price-and-button/PriceAndButton";

const Card = () => {

    return (
        <div className={s.cardContainer}>

            <PictureStaff
                pictureLabelText={labels.yellowNew.pictureLabelText}
                labelText={labels.yellowNew.labelText}
                labelVariant={labels.yellowNew.labelVariant}
            />
            <Duration/>
            <Advertisement/>
            <div className={s.descriptionContainer}>
                {cardContent.map(el => {
                    return <Content key={el.id} contentText={el.text}/>
                })
                }
            </div>
            <Departures/>
            <PriceAndButton/>

        </div>
    );
};

export default Card;