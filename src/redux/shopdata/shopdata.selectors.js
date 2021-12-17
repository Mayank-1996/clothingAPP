import { createSelector } from "reselect";

const shopdata = (state) => state.collections.collections;

const shop = (state) => state.collections;

export const selectCollectionPage = (type) =>
  createSelector([shopdata], (shopdata) => shopdata[type]);

export const selectCollectionsForPreview = createSelector(
  [shopdata],

  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [shopdata],

    (collections) => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [shop],

  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [shop],

  (shop) => !!shop.collections
);
