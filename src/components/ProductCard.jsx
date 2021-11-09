import React from "react";
import ButtonAdd from "./ButtonAdd";
import ButtonAdded from "./ButtonAdded";
import WhishList from "./WhishList";

export default function ProductCard(props) {
  const [stateButton, setStateButton] = React.useState(false);
  const onClickButton = () => setStateButton((stateButton) => !stateButton);

  const { imagePath, nameDescription, oldPrice, price, payment } =
    props.product;
  return (
    <div className="item">
      <img src={imagePath} alt={nameDescription} />
      <label className="whish-list">
        <WhishList />
      </label>
      <p className="text-item description">{nameDescription}</p>
      <p className="text-item old-price">{oldPrice}</p>
      <p className="text-item price">{price}</p>
      <p className="text-item payment">
        em até <spam>{payment}</spam> sem juros
        </p>
      <label onClick={onClickButton}>
        {stateButton ? <ButtonAdded /> : <ButtonAdd />}
      </label>
    </div>
  );
}
