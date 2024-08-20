import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const ConfirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={ConfirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input placeholder="Enter you Full Name" type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          placeholder="Enter your street address"
          type="text"
          id="street"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input placeholder="Enter your postal code" type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input placeholder="Enter your City here" type="text" id="city" />
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
