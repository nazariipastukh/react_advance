import {Simpson} from './Simpson'
import {simpsons} from "../../assets/simpsons";
import styles from "../Components.module.css";

export const SimpsonsComponent = () => {
    return(
        <div className={styles.wrapper}>
            {simpsons.map(simpson=>(
                <Simpson key={simpson.id} simpson={simpson}/>
            ))}
        </div>
    )
}