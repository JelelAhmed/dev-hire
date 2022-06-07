import { createSelector } from "reselect";

const selectDeveloper = state => state.developer;

export const selectDevs = createSelector(
	[selectDeveloper],
	(developer) => developer.devs
);

export const selectFavorite = createSelector(
	[selectDeveloper],
	(developer) => developer.favorites
);

export const selectActiveFavorite = createSelector(
	[selectDeveloper],
	(developer) => developer.favorites.active
);

export const selectActive = createSelector(
	[selectDeveloper],
	(developer) => developer.active
);