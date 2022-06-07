import React from 'react';
import './page-layout.styles.scss';


const  PageLayout = ({children, title}) => (
		<div className="layout">
			<div className='layout-container'>
				<h1 className='layout-heading'>{title}</h1>
				<div className='layout-dashboard'>
					{children}
				</div>
			</div>
		</div>
	);

export default PageLayout;