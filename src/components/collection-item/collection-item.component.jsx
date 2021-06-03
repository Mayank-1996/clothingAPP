import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custombutton.component";

import "./collection-item.styles.scss";

export default function CollectionItem({ item }) {
  const dispatch = useDispatch();
  var { id, name, price, imageUrl } = item;
  return (
    <div key={id} className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>

      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
}
