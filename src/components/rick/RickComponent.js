import {useEffect, useState} from "react";
import {Rick} from './Rick'
import {rickService} from '../../services'

export const RickComponent = () => {
    const [ricks, setRicks] = useState([]);

    useEffect(() => {
        rickService.getAll()
            .then(({data}) => {
                setRicks(data.results);
            })
    }, []);

    return (
        <div>
            {ricks?.map((rick) => (
                <Rick key={rick.id} rick={rick}/>
            ))}
        </div>
    );
};
