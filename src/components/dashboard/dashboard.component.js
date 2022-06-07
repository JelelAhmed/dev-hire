import React from "react";

import Footer from "../footer/footer.component";
import CurrencySelect from "../currency-select/currency-select.component";

import './dashboard.styles.scss';


const Dashboard = ({children}) => {
	return (
		<div className='dashboard'>
			<div className="dashboard-container">
			{children}
			</div>
			<div className="dashboard-footer">
				<Footer />
				<CurrencySelect />
			</div>
		</div>
	)
};


export default Dashboard;