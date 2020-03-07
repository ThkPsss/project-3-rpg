import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function LoginForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="email"
          list="emails"
          type="text"
          className="form-control"
          placeholder="example@email.com"
          id="email"
        />
        <datalist id="emails">
          {props.emails.map(email => (
            <option value={email} key={email} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
