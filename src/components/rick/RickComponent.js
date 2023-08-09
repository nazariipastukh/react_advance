import {useEffect} from "react";
import {Rick} from './Rick'
import {rickService} from '../../services'
import styles from '../Components.module.css'
import {rickActions} from "../../reduxCore";
import {useDispatch, useSelector} from "react-redux";

export const RickComponent = () => {
    const dispatch = useDispatch()
    const ricks = useSelector((store) => store.rick.results)
    const isLoading = useSelector((store) => store.rick.isLoading)
    const next = useSelector((store) => store.rick.info?.next)
    const prev = useSelector((store) => store.rick.info?.prev)

    useEffect(() => {
        dispatch(rickActions.setIsLoading(true))
        rickService.getAll()
            .then(({data}) => {
                dispatch(rickActions.setRick(data));
            })
    }, []);

    const getNext = (e) => {
        e.preventDefault()
        dispatch(rickActions.setIsLoading(true))
        fetch(next)
            .then(response => response.json())
            .then(data => {
                dispatch(rickActions.addRick(data))
            })
    }
    const getPrev = (e) => {
        e.preventDefault()
        dispatch(rickActions.setIsLoading(true))
        fetch(prev)
            .then(response => response.json())
            .then(data => {
                dispatch(rickActions.addRick(data))
            })
    }

    return (
        <div className={styles.wrapper}>
            {isLoading ?
                <h1>Loading...</h1> :
                <div>
                    <div className={styles.buttons}>
                        <button onClick={getPrev} disabled={!prev}> Previous Page</button>
                        <button onClick={getNext} disabled={!next}> Next Page</button>
                    </div>
                    {ricks && ricks?.map((rick) => (
                        <Rick key={rick.id} rick={rick}/>
                    ))}
                </div>
            }
        </div>
    );
};
