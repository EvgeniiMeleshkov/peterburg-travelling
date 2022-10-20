import s from "./Departures.module.scss";
import {departuresTimes} from "../../../common-data/departure-times/departuresTimes";
import {useState} from "react";

const Departures = () => {

    const [num, setNum] = useState(4)

    const onClickHandler = () => {
        setNum(departuresTimes.length)
    }

    const timeForRender = departuresTimes.map((el, idx) => {
        return (
            <label onClick={onClickHandler} key={idx} className={s.timeInstance}>
                {idx === 3 && num === 4 ? "еще" : el.time}
            </label>
        )
    }).slice(0, num)

    return (
        <div className={s.departureTimes}>
                {timeForRender}
        </div>
    );
};

export default Departures;