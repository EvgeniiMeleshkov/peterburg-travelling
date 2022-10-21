import s from "./Content.module.scss";
import CheckBox from "../common/check-box/CheckBox";

const Content = ({contentText}) => {
    return (
        <div className={s.contentDescription}>
            <CheckBox/>
            <span className={s.contentText}>{contentText}</span>
        </div>
    );
};

export default Content;