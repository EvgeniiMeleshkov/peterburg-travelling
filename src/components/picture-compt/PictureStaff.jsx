import s from "./PictureStaff.module.scss";

const PictureStaff = ({picture, labelText, labelVariant, pictureLabelText}) => {
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