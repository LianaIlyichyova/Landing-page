import React from "react";
import classes from "./discount.module.css";
import { landing } from "../../assets/variables/text-variables";
import ginger from "../../assets/images/ginger.png";
import nootris from "../../assets/images/nootris.png";
import virus from "../../assets/images/virus.png";
import ImagesLine from "./images-line/images-line";
import Button from "./button/button";
import Prices from "./prices/prices";

const Discount = () => {
  const texts = landing.discount;
  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <p className={classes.white_text}>{texts.headline[0]}</p>
        <p className={classes.yellow_text}>{texts.headline[1]}</p>
      </div>
      <Prices price={texts.price} sale={texts.sale_price} />
      <ImagesLine
        texts={texts}
        ginger={ginger}
        batterie={nootris}
        virus={virus}
      />
      <Button text={texts.order_button_text} />
    </div>
  );
};

export default Discount;
