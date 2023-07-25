import {useEffect, useState} from "react";
import {Rick} from './Rick'
import {rickService} from '../../services'
import styles from '../Components.module.css'

export const RickComponent = () => {
    const [ricks, setRicks] = useState([]);

    useEffect(() => {
        rickService.getAll()
            .then(({data}) => {
                setRicks(data.results);
            })
    }, []);

    return (
        <div className={styles.wrapper}>
            {ricks?.map((rick) => (
                <Rick key={rick.id} rick={rick}/>
            ))}
        </div>
    );
};
