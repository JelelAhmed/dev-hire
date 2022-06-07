import React from 'react';

import FavoriteList from '../../components/favorite-lists/favorite-lists.component';
import PageLayout from '../../components/page-layout/page-layout.component';



const  Favorites = () => {
	return (

		<PageLayout title='Favorites'>
			<FavoriteList />
		</PageLayout>
	);
}

export default Favorites;
