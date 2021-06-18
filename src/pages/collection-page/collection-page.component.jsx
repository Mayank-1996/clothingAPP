import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionPage } from "../../redux/shopdata/shopdata.selectors";
import "./collection-page.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

export default function CollectionPage({ match }) {
  const { title, items } = useSelector((state) =>
    selectCollectionPage(match.params.collectionId)(state)
  );
  console.log(match);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
