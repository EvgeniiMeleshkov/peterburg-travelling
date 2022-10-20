import s from "./PictureStaff.module.scss";
import picture from "../../assets/cards-pictures/kazanskiy-sobor.jpeg";

const PictureStaff = ({labelText, labelVariant, pictureLabelText}) => {
    return (
        <div className={s.pictureBlock}>
            <div style={labelVariant}>
                <p style={pictureLabelText}>{labelText}</p>
            </div>
            <img src={picture} alt={''}/>
        </div>
    );
};

export default PictureStaff;