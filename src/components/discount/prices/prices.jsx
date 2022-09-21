import React from "react";
import classes from "./prices.module.css";

const Prices = ({ price, sale }) => {
  return (
    <div className={classes.prices}>
      <p className={classes.price}>
        <strike>{price}</strike>
      </p>
      <p className={classes.sale_price}>{sale}</p>
    </div>
  );
};

export default Prices;
