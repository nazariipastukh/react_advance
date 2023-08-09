const initialState = {
    info: {},
    results: [],
    isLoading: false
}

export const RickActionTypes = {
    SET_RICK: 'SET_RICK',
    SET_IS_LOADING: 'SET_IS_LOADING',
    ADD_RICK: 'ADD_RICK',
    PREV_CHARACTERS: 'PREV_CHARACTERS'
}

export const rickReducers = (state = initialState, action) => {
    switch (action.type) {
        case RickActionTypes.SET_RICK:
            return {
                ...state,
                isLoading: false,
                results: action.payload.results,
                info: action.payload.info
            }
        case RickActionTypes.ADD_RICK:
            return {
                ...state,
                isLoading: false,
                results: [
                    ...action.payload.results
                ],
                info: action.payload.info
            }
        case  RickActionTypes.PREV_CHARACTERS:
            return {
                ...state,
                isLoading: false,
                results: [
                    ...action.payload.results
                ],
                info: action.payload.info
            }
        case RickActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}