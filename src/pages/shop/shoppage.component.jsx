import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collectionoverview.component";
import { firestore } from "../../firebase/firebase.utils";
import CollectionPage from "../../pages/collection-page/collection-page.component";

const ShopPage = ({ match }) => {
  // console.log("match", match);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    // console.log(collectionRef);

    // collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     console.log(snapshot);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    collectionRef.get().then((snapshot) => {
      console.log(snapshot);
    });
  }, []);

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
