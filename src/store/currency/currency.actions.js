import currencyActionTypes from "./currency.types";
import { CurrencyClient } from "../../APIs/api.terawork";


export const getCurrencies = () => (dispatch) => {
	dispatch({ type: currencyActionTypes.GET_CURRENCY_PENDING })
	CurrencyClient.get()
		.then(data => dispatch({type: currencyActionTypes.GET_CURRENCY_SUCCESS, payload: data}))
		.catch(error => dispatch({type: currencyActionTypes.GET_CURRENCY_FAILED, payload: error}))
}

export const setConversionCurrency = (id) => ({
	type: currencyActionTypes.SET_CONVERSION_CURRENCY,
	payload: id
})

export const setConversionRate = (rate) => ({
	type: currencyActionTypes.SET_CONVERSION_RATE,
	payload: rate
})

export const setConversionSymbol = (symbol) => ({
	type: currencyActionTypes.SET_CONVERSION_SYMBOL,
	payload: symbol
})