import {useEffect, useState} from "react";
import {Launch} from './Launch'
import styles from '../Components.module.css'
import {launchService} from "../../services";

export const LaunchesComponent = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        launchService.getAll()
            .then(({data}) => {
                setLaunches(data)
            })
    }, [])

    return (
        <div className={styles.wrapper}>
            {launches.filter(launch => launch.launch_year < '2020').map(launch => (
                <Launch key={launch.id}
                        launch={launch}
                />
            ))}
        </div>
    )
}