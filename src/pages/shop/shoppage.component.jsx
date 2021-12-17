import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collectionoverview.component";
import WithspinnerComponent from "../../components/with-spinner/withSpinner.component";
import CollectionPage from "../../pages/collection-page/collection-page.component";
import { fetchCollectionsStart } from "../../redux/shopdata/shop.actions";
import { selectIsCollectionsLoaded } from "../../redux/shopdata/shopdata.selectors";

const CollectionOverviewWithSpinner = WithspinnerComponent(CollectionOverview);
const CollectionPageWithSpinner = WithspinnerComponent(CollectionPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => selectIsCollectionsLoaded(state));
  // const [isLoading, setIsLoading] = useState(true);

  console.log("match", isLoading);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  return (
    <div>
      <Switch>
        <Route
          exact
          path={`${match.path}/`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={!isLoading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isLoading} {...props} />
          )}
        />
      </Switch>
    </div>
  );
};

export default ShopPage;
