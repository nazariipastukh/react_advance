import styles from '../Components.module.css'

export const Launch = ({launch}) => {
    const {mission_name, launch_year} = launch

    return (
        <div className={styles.container}>
            <img src={launch.links.mission_patch_small} alt={mission_name}></img>
            <h2>{mission_name}</h2>
            <h2>{launch_year}</h2>
        </div>
    )
}