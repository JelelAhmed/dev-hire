import developerActionTypes from "./developer.types";
import { DeveloperClient } from "../../APIs/api.terawork";


export const getDevelopers = () => (dispatch) => {
	dispatch({ type: developerActionTypes.GET_DEVELOPER_PENDING })
	DeveloperClient.get()
		.then(data => dispatch({type: developerActionTypes.GET_DEVELOPER_SUCCESS, payload: data}))
		.catch(error => dispatch({type: developerActionTypes.GET_DEVELOPER_FAILED, payload: error}))
}


export const toggleFavorite = (developer) => ({
	type: developerActionTypes.TOGGLE_FAVORITE,
	payload: developer
})

export const toggleActive = (boolean) => ({
	type: developerActionTypes.TOGGLE_ACTIVE_FAVORITE,
	payload: boolean
})