import styles from "../Components.module.css";

export const Rick = ({rick}) => {
    const {name, status, species, gender, image} = rick

    return (
        <div className={styles.container}>
            <div className={styles.photo}><img src={image} alt={'simpson'}></img></div>
            <h2>{name} {status}</h2>
            <h4>Gender: {gender}</h4>
            <h5>{species}</h5>
        </div>
    )
}