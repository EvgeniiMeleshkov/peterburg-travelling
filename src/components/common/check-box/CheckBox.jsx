import s from "./CheckBox.module.scss";

const CheckBox = () => {
    return (
        <label className={s.label}>
            <input
                type={'checkbox'}
                className={s.checkbox}
            />
        </label>
    );
};

export default CheckBox;