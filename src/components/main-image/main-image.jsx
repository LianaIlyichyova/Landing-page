import React from "react";
import background from "../../assets/images/bg.png";
import maskgroup from "../../assets/images/maskgroup.png";
import classes from "./main-image.module.css";
import { landing } from "../../assets/variables/text-variables";

const MainImage = () => {
  const texts = landing.main_img_text;
  return (
    <div className={classes.container}>
      <div className={classes.maskgroup}>
        <img
          src={maskgroup}
          alt="maskgroup"
          className={classes.markgroup_image}
        />
      </div>
      <img src={background} alt="background" className={classes.bg} />

      <div className={classes.text}>
        <div>
          <p className={classes.headline}>{texts.headline}</p>
          <p className={classes.description}>{texts.description}</p>
        </div>

        <div className={classes.text_part}>
          <p className={classes.text_part_headline}>
            {texts.text_part_headline}
          </p>
          <p className={classes.text_part_description}>
            {texts.text_part_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
