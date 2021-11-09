import React from "react";

export default function WhishList() {
  const [stateButton, setStateButton] = React.useState(false);
  const onClickButton = () => setStateButton((stateButton) => !stateButton);
  return (
    <div
      onClick={onClickButton}
      className={stateButton ? "whish-list-selected" : "whish-list-default"}
    />
  );
}
