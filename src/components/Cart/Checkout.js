import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const ConfirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isSixChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputsValidity.postal ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={ConfirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          placeholder="Enter you Full Name"
          type="text"
          id="name"
          ref={nameInputRef}
        />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          placeholder="Enter your street address"
          type="text"
          id="street"
          ref={streetInputRef}
        />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          placeholder="Enter your postal code"
          type="text"
          id="postal"
          ref={postalInputRef}
        />
        {!formInputsValidity.postal && (
          <p>Please enter a valid postal code (6 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          placeholder="Enter your City here"
          type="text"
          id="city"
          ref={cityInputRef}
        />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
