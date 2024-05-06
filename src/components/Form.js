import { useState, useEffect } from "react"; 
import { validateValues } from "./Validate";

const Form = () => {
    const [inputFields, setInputFields] = useState({
        email: "",
        login: "",
      });
      const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  useEffect(() => {
    const finishSubmit = () => {
      console.log(inputFields);
    };

    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors, inputFields, submitting]);

  return (
<div className="App">
      {Object.keys(errors).length === 0 && submitting ? (
        <span className="success">Successfully submitted ✓</span>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="login"
            value={inputFields.login}
            onChange={handleChange}
            style={{ border: errors.login ? "1px solid red" : null }}
          ></input>
          {errors.login ? (
            <p className="error">
              The Name is to short, should be at least 10 characters long
            </p>
          ) : null}
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={inputFields.email}
            onChange={handleChange}
            style={{ border: errors.email ? "1px solid red" : null }}
          ></input>
          {errors.email ? (
            <p className="error">
              The Email is to short, should be at least 15 characters long
            </p>
          ) : null}
        </div>
        <button type="submit">Press me</button>
      </form>
    </div>
  )
}

export { Form }