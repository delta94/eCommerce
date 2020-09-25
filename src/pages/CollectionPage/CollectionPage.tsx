import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useSelector } from "react-redux";
import { StoreState, ShopCollection } from "../../models";
import { RouteComponentProps, useParams } from "react-router-dom";

import "./CollectionPage.styles.scss";

interface Params {
  collectionTitle: string;
}

/* Map product section name to collection Id */

const CollectionPage = ({ match }: RouteComponentProps) => {
  const { collectionTitle } = useParams<Params>();

  const collection: ShopCollection | undefined = useSelector(
    (state: StoreState) => state.shop.collections[collectionTitle]
  );

  return (
    <div className="collection-page">
      <h2 className="title">{collection?.title}</h2>
      <div className="items">
        {collection ? (
          collection.items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        ) : (
          <p>Collection not found!</p>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
