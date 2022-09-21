import React from "react";
import classes from "./button.module.css";

const Button = ({ text }) => {
  return (
    <div className={classes.button_container}>
      <input className={classes.button} type="submit" value={text} />
    </div>
  );
};

export default Button;
