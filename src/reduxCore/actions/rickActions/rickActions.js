import {RickActionTypes} from "../../reducers/rickReducers/rickReducers";

export const rickActions = {
    setRick: (data) => ({type: RickActionTypes.SET_RICK, payload: data}),
    addRick: (data) => ({type: RickActionTypes.ADD_RICK, payload: data}),
    setIsLoading: (isLoading) => ({type: RickActionTypes.SET_IS_LOADING, payload: isLoading})
}