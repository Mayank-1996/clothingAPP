import {createSelector} from 'reselect';

const shopdata = state => state.collections.collections

export const selectCollectionPage = type => createSelector(
    [shopdata],
    shopdata=>shopdata[type]
)