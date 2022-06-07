import React from 'react';

import DevelopersList from '../../components/developers/developerList.component';
import PageLayout from '../../components/page-layout/page-layout.component';
import './home.styles.scss';


const  Home = () => {
	return (

		<PageLayout title='Hire Top Developers'>
			<DevelopersList />
		</PageLayout>
	);
}

export default Home;
