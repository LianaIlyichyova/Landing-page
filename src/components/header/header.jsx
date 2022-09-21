import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "../../assets/images/logo.png";
import busket from "../../assets/images/busket.png";
import { landing } from "../../assets/variables/text-variables";
import classes from "./header.module.css";

const Header = () => {
  const [count, setCount] = useState(1);
  const texts = landing.header;

  //just realized a primitive function for changiing busket count
  //because count must receive from state

  const handleClick = () => {
    let num = count;
    num += 1;
    setCount(num);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header_logo}>
        <img src={logo} alt="Logo" className={classes.header_logo_img} />
      </div>
      <div className={classes.header_text_container}>
        {Object.keys(texts).map((key, i) =>
          key === "phone" ? (
            <a
              href={`tel:${texts[key]}`}
              className={classes.phone}
              key={uuidv4()}
            >
              <span className={classes.header_text}>{texts[key]}</span>
            </a>
          ) : (
            <span className={classes.header_text} key={uuidv4()}>
              {texts[key]}
            </span>
          )
        )}
      </div>
      <div className={classes.header_busket} onClick={handleClick}>
        <img src={busket} alt="busket" className={classes.header_busket_img} />
        <span className={classes.header_busket_count}>{count}</span>
      </div>
    </header>
  );
};

export default Header;
