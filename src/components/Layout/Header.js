import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Table full of food" />
      </div>
    </>
  );
};

export default Header;
