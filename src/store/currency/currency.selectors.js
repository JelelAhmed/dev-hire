import { createSelector } from "reselect";

const selectCurrency = state => state.currency;

export const selectCurrencies = createSelector(
	[selectCurrency],
	(currency) => currency.currencies
);

export const selectConversionId = createSelector(
	[selectCurrency],
	(currency) => currency.conversionId
);

export const selectConversionRate = createSelector(
	[selectCurrency],
	(currency) => currency.conversionRate
);

export const selectConversionSymbol = createSelector(
	[selectCurrency],
	(currency) => currency.conversionSymbol
);