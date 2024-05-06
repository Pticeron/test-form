const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.email.length < 15) {
      errors.email = "Email is too short";
    }
    if (inputValues.login.length < 10) {
      errors.login = "Name is too short";
    }

    return errors;
  };

  export {validateValues}