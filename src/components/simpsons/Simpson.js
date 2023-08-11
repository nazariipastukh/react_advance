import styles from '../Components.module.css'

export const Simpson = ({simpson}) => {
    const {photo, name, surname, age, info} = simpson

    return (
        <div className={styles.container}>
            <div className={styles.photo}><img src={photo} alt={'simpson'}></img></div>
            <h2>{name} {surname}</h2>
            <h4>Age: {age}</h4>
            <h5>{info}</h5>
        </div>
    )
}