import s from "./Advertisement.module.scss";
import Duration from "../duration/Duration";

const Advertisement = () => {
    return (
        <div className={s.advertisementTitle}>
                <Duration/>
           <div className={s.advertisementText}>
               АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019
           </div>
        </div>
    );
};

export default Advertisement;