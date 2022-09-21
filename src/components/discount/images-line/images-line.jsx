import React from "react";

import classes from "./images-line.module.css";

const ImagesLine = ({ texts, ginger, batterie, virus }) => {
  return (
    <div className={classes.container}>
      <div className={classes.ginger}>
        <img src={ginger} alt="ginger" className={classes.ginger_image} />
        <div className={classes.ginger_text}>
          <p className={`${classes.white_text} ${classes.small_text}`}>
            {texts.ginger[0]}
          </p>
          <p className={`${classes.yellow_text} ${classes.small_text}`}>
            {texts.ginger[1]}
          </p>
        </div>
      </div>
      <div className={classes.batterie}>
        <img src={batterie} alt="nootris" className={classes.batterie_image} />
        <div className={classes.batterie_text}>
          <p className={`${classes.white_text} ${classes.headline_text}`}>
            {texts.delivery}
          </p>
          <p className={`${classes.yellow_text} ${classes.middle_text}`}>
            {texts.special_price}
          </p>
        </div>
      </div>
      <div className={classes.virus}>
        <img src={virus} alt="virus" className={classes.virus_image} />
        <div className={classes.virus_text}>
          <p className={`${classes.white_text} ${classes.small_text}`}>
            {texts.virus[0]}
          </p>
          <p className={`${classes.yellow_text} ${classes.small_text}`}>
            {texts.virus[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImagesLine;
