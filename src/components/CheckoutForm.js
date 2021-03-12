import React, { useState } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};
const errorData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
}

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState(errorData);

  const errorHandling = (fieldName, fieldValue) => {
    console.log('fieldName', fieldName);
    console.log('fieldValue', fieldValue);
    if ((fieldName === 'firstName' || 'lastName' || 'address' || 'city' || 'state' || 'zip') && fieldValue === '') {
      return `${fieldName} is a required field.`
    }
  }

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    const errorMessage = errorHandling(e.target.name, e.target.value);

    if (errorMessage !== "") {
      setShowSuccessMessage(false);
    }

    setErrors({
      ...errors,
      [e.target.name]: errorMessage
    });

    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);

    const submitErrors = {};
    Object.keys(errors).forEach(field => {
      submitErrors[field] = errorHandling(field, values[field])
    });
    
    setErrors(submitErrors);
    
    const hasErrors = (submitErrors.firstName === "" && submitErrors.lastName === "" && submitErrors.email === "" && submitErrors.city === "" && submitErrors.state === "" && submitErrors.zip === "");
    setShowSuccessMessage(hasErrors);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
          {(errors.firstName) && <p data-testid="error" className='form-p'>Error: {errors.firstName}</p>}
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
          {(errors.lastName) && <p data-testid="error" className='form-p'>Error: {errors.lastName}</p>}
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
          {(errors.address) && <p data-testid="error" className='form-p'>Error: {errors.address}</p>}
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
          {(errors.city) && <p data-testid="error" className='form-p'>Error: {errors.city}</p>}
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
          {(errors.state) && <p data-testid="error" className='form-p'>Error: {errors.state}</p>}
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
          {(errors.zip) && <p data-testid="error" className='form-p'>Error: {errors.zip}</p>}
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
