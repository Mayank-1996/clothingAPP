import React from "react";
import { Route, Switch } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collectionoverview.component";
import CollectionPage from "../../pages/collection-page/collection-page.component";

const ShopPage = ({ match }) => {
  console.log("match", match);
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}/`} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Switch>
    </div>
  );
};

export default ShopPage;
