import developerActionTypes from "./developer.types"
import { toggleFavoriteDevs } from "./developer.utils"

const INITIAL_STATE = {
	devs: null,
	favorites: [],
	isPending: false,
	onError: null,
	active: false
}



const developerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case developerActionTypes.GET_DEVELOPER_PENDING:
			return {
				...state,
				isPending: true
			}
		
		case developerActionTypes.GET_DEVELOPER_SUCCESS:
			return {
				...state,
				isPending: false,
				devs: action.payload.data.data.service_search_results.hits
			}

		case developerActionTypes.GET_DEVELOPER_FAILED:
			return {
				...state,
				onError: action.payload
			}

		case developerActionTypes.TOGGLE_FAVORITE:
			return {
				...state,
				favorites: toggleFavoriteDevs(state.favorites, action.payload)
			}

		case developerActionTypes.TOGGLE_ACTIVE_FAVORITE:
			return {
				...state,
				active: !state.active
			}
	
			

			
		default: 
			return state;
	}
}

export default developerReducer;