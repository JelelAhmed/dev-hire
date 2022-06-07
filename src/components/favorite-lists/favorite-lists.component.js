import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFavorite } from '../../store/developer/developer.selectors';
import { setConversionRate } from '../../store/currency/currency.actions';
import ProfileCard from '../../components/profile-card/profile-card.component';
import Dashboard from '../../components/dashboard/dashboard.component';
import './favorite-lists.styles.scss';
import { selectConversionId, selectConversionRate, selectConversionSymbol, selectCurrencies } from '../../store/currency/currency.selectors';


const  FavoriteList = () => {
	const dispatch = useDispatch();
	const currencies = useSelector(selectCurrencies)
	const conversionId = useSelector(selectConversionId);
	const setConversionSymbol = useSelector(selectConversionSymbol)
	const conversionRate = useSelector(selectConversionRate);

	const favorites = useSelector(selectFavorite);


	return (
		<Dashboard>
			{favorites.length ? (
				favorites.map((profile) => {
					console.log(profile._source.starting_from)
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
				: <div className="favorites">No Favorites to Display</div> 
			}
		</Dashboard>
	);
}

export default FavoriteList;



