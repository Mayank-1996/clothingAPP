import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { useSelector } from "react-redux";

export default function CollectionOverview() {
  const collections = useSelector((state) => state.collections.collections);
  return (
    <div>
      {Object.keys(collections).map((key) => {
        let { id, ...otherCollectionItems } = collections[key];

        return <CollectionPreview key={id} {...otherCollectionItems} />;
      })}
    </div>
  );
}
