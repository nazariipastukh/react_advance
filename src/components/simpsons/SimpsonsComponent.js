import {Simpson} from './Simpson'
import {simpsons} from "../../assets/simpsons";

export const SimpsonsComponent = () => {
    return(
        <div>
            {simpsons.map(simpson=>(
                <Simpson key={simpson.id} simpson={simpson}/>
            ))}
        </div>
    )
}