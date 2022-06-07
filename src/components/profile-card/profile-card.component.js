import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as FavIcon } from '../../assets/favorite.svg'
import { selectConversionRate, selectConversionSymbol } from "../../store/currency/currency.selectors";
import { toggleFavorite } from "../../store/developer/developer.actions";

import './profile-card.styles.scss';

const ProfileCard = ({name, avatar, photo, price, profile}) => {

	console.log(price, 'profile')
	const dispatch = useDispatch();
	const conversionRate = useSelector(selectConversionRate);
	const conversionSymbol = useSelector(selectConversionSymbol);

	
	const handleClick = () => {
		dispatch(toggleFavorite(profile))
	}
	

	const convertCurrency = () => {
		let amount = price * ( 1/ conversionRate);
	     return	amount.toFixed(2);
	} 
	

	return (
		<div className='profile'>
			<div className="profile-background">	
				<div onClick={handleClick} className={'profile-backdrop'}>
					<FavIcon className='profile-icon'/>
				</div>	
				<img className="profile-image" src={photo} alt='pic' />
			</div>
			<div className="profile-avatar">
				<img src={avatar} alt='avatar' />
			</div>
			<div className="profile-info">
				<div className="profile-detail">
					<span className="profile-name">{name}</span>
					<span className="profile-rate">{[conversionSymbol, convertCurrency()]}</span>
				</div>
				<div className="profile-cta">Hire</div>
			</div>
		</div>
	)
};


export default ProfileCard;