import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ArrowDropdown } from '../../assets/down-arrow.svg';
import { getCurrencies, setConversionCurrency, setConversionSymbol, setConversionRate } from '../../store/currency/currency.actions';
import { selectConversionId, selectCurrencies } from '../../store/currency/currency.selectors';

import './currency-select.styles.scss';


const CurrencySelect = () => {

	const dispatch = useDispatch();
	const currencies = useSelector(selectCurrencies);
	const conversionId = Number(useSelector(selectConversionId));
	const flagId = Number(conversionId);
	console.log(conversionId)

	useEffect(() => {
		let exchangeRate;
		
		const getConverterRate = () => {
			currencies.map((currency) => {
				console.log(currency.id, conversionId, 'converselel')
				if(currency.id == conversionId) {
					// console.log(currency.id, conversionId)
					dispatch(setConversionSymbol(currency.symbol));
					console.log(currency.divider, 'divider')
					return exchangeRate = currency.divider;
				}
			})
			return exchangeRate;
		}
		getConverterRate();
		dispatch(setConversionRate(exchangeRate));

	}, [conversionId])


	useEffect(() => {
		dispatch(getCurrencies());
	},[]);


	return (
		<div className="select">
				<div className='select-currency'>
					<div className='select-flag'>
					{currencies.map((currency) => {
						if(currency.id === flagId) {
							return (
								<img alt='flag' key={currency.id} src={currency.flag_url}  />
							);
						}
						return null

						})
					}
					</div>
					<select onChange={(e) => dispatch(setConversionCurrency(e.target.value, ))} className='select-dropdown'>
						{currencies.map((currency) => {
							return (
								<option key={currency.id} value={currency.id}>{currency.short}</option>
								);
							})
						}
				</select>
				</div>
		</div>
	);
}

export default CurrencySelect;