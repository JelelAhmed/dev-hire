export const toggleFavoriteDevs = (favorites, devToAdd) => {
	const existingDev = favorites.find(
		favorite => favorite._id === devToAdd._id
	);

	if(existingDev) {
	  return favorites.filter(favorite => favorite._id !== devToAdd._id)
	} 

	return [...favorites, { ...devToAdd, active: true }];
}