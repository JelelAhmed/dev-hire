import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';


import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<div className="navigation-container">
					<Link className="title" to='/'>
						<div className="">Dev<span className="title-alt">Hire</span></div>
					</Link>
					<nav className="sidebar">
						<ul className="nav">
							<li className="nav-item nav-item--active">
								<Link className="nav-link" to='/'>
									<div className="nav-backdrop nav-backdrop-active">
										<Search className="nav-icon" />
									</div>
									<span>Home</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to='favorites'>
									<div className="nav-backdrop">
										<Heart className="nav-icon" />
									</div>
									<span>Favorites</span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;