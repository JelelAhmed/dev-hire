import currencyActionTypes from "../currency/currency.types"


const INITIAL_STATE = {
	currencies: [],
	conversionId: 1,
	conversionRate: 1,
	conversionSymbol: '#',
	isPending: false,
	onError: null
}



const currencyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case currencyActionTypes.GET_CURRENCY_PENDING:
			return {
				...state,
				isPending: true
			}
		
			case currencyActionTypes.GET_CURRENCY_SUCCESS:
				return {
					...state,
					isPending: false,
					currencies: action.payload.data.data.currencies
				}

			case currencyActionTypes.GET_CURRENCY_FAILED:
				return {
					...state,
					onError: action.payload
				}
			
			case currencyActionTypes.SET_CONVERSION_CURRENCY:
				return {
					...state,
					conversionId: action.payload
				}

			case currencyActionTypes.SET_CONVERSION_RATE:
				return {
					...state,
					conversionRate: action.payload
				}

			case currencyActionTypes.SET_CONVERSION_SYMBOL:
				return {
					...state,
					conversionSymbol: action.payload
				}
		
		default: 
			return state;
	}
}

export default currencyReducer;