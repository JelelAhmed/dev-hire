import { combineReducers } from "redux";

import developerReducer from "./developer/developer.reducer";
import currencyReducer from "./currency/currency.reducer";


const rootReducer = combineReducers({
	developer: developerReducer,
	currency: currencyReducer
});

export default rootReducer;