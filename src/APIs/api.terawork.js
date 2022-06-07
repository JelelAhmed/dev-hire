import axios from "axios";

export const DeveloperClient = axios.create({
  baseURL: 'https://api.terawork.com/service-categories/sellers-services/computer-software-development',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': ''
	},
});

export const CurrencyClient = axios.create({
  baseURL: 'https://api.terawork.com/resources',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': ''
	},
});