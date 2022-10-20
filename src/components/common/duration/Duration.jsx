import s from "./Duration.module.scss";
import clocks from "../../../assets/png-staff/clocks.png";

const Duration = () => {
    return (
        <div className={s.duration}>
            <label className={s.clocks}><img alt='duration' src={clocks}/></label>
            <label className={s.hours}>2 часа</label>
        </div>
    );
};

export default Duration;