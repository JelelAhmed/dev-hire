import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectConversionId, selectConversionRate, selectCurrencies } from "../../store/currency/currency.selectors";
import { setConversionRate, setConversionSymbol } from "../../store/currency/currency.actions";
import { getDevelopers, toggleActive } from "../../store/developer/developer.actions";
import { selectActive, selectActiveFavorite, selectDevs } from "../../store/developer/developer.selectors";

import ProfileCard from "../profile-card/profile-card.component";
import Dashboard from "../dashboard/dashboard.component";



import './developers.styles.scss';


const Developers = () => {
	const dispatch = useDispatch();
	const devs = useSelector(selectDevs);
	const currencies = useSelector(selectCurrencies);
	const conversionId = Number(useSelector(selectConversionId));
	const active = useSelector(selectActive);



	useEffect(() => {
		dispatch(getDevelopers());
	}, []);


	useEffect(() => {
		let exchangeRate;
		
		const getConverterRate = () => {
			currencies.map((currency) => {
				if(currency.id === conversionId) {
					dispatch(setConversionSymbol(currency.symbol));
					return exchangeRate = currency.divider;
				}
			})
			return exchangeRate;
		}
		getConverterRate();
		dispatch(setConversionRate(getConverterRate()));

	},[conversionId])
	

	return (
		<Dashboard>
			{devs ? (
				devs.map((profile) => {
							return (
								<ProfileCard
									key={profile._id}
									profile={profile}
									services={profile._index}
									id={profile._id}
									name={profile._source.display_name}
									avatar={profile._source.avatar}
									photo={profile._source.service_photo}
									price={profile._source.starting_from}
									currency={profile._source.currency_name}
								/>
							);
						})
				)
				: <div className="developers">No Developers to Display</div> 
			}
		</Dashboard>
	)

};


export default Developers;