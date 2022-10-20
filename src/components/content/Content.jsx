import s from "./Content.module.scss";
import CheckBox from "../common/check-box/CheckBox";

const Content = ({contentText}) => {
    return (
        <div className={s.contentDescription}>
            <CheckBox/>
            <div className={s.contentText}>{contentText}</div>
        </div>
    );
};

export default Content;