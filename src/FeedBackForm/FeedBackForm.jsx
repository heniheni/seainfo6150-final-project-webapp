import React, { useState } from "react";
import styles from "./FeedBackForm.module.css";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("DATA", data.get("foo"));
    setSubmittedForm(data);
  }

  const [nameError, setNameError] = useState();
  const validateName = (e) => {
    var name = e.target.value;
    if (!name.match(/^[a-zA-Z ]*$/)) {
      setNameError("Enter Alphabet Character Only!!");
    } else {
      setNameError("");
    }
  };

  const [emailError, setEmailError] = useState();
  const validateEmail = (e) => {
    var email = e.target.value;
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!email.match(pattern)) {
      setEmailError("Enter Valid Email!!");
    } else {
      setEmailError("");
    }
  };

  const [mobileNumberError, setMobileNumberError] = useState();
  const validateMobileNumber = (e) => {
    var mobile = e.target.value;
    if (!mobile.match(/^[0-9]{10}$/)) {
      setMobileNumberError("Enter valid Phone Number!!");
    } else {
      setMobileNumberError("");
    }
  };

  return (
    <div>
      {submittedForm ? (
        <div>
          Your form entry was {submittedForm.get("myText")} and{" "}
          {submittedForm.get("myDropdown")}
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className={styles.formContainer}>
            <h1 className={styles.formName}>Feedback Form</h1>
            <p className={styles.subText}>
              Please fill in this form to give your Feedback.<br/><br/>
              <i>Fields' marked with * are mandatory </i>
            </p>
            <br />
            <hr />
            <label>I have a Feedback About: </label>
            <select name="myDropdown">
              <option value="foo">Website Issue</option>
              <option value="bar">My Experience</option>
              <option value="baz">Improvement</option>
            </select>
            <br />
            <label>Did you Achieve your Goal? </label>
            <label>Yes</label>
            <input type="radio" name="foo" id="foo-yes" value="yes" />
            <label>No</label>
            <input type="radio" name="foo" id="foo-no" value="no" />
            <label>Maybe</label>
            <input type="radio" name="foo" id="foo-maybe" value="maybe" />
            <br />
            <label htmlFor="myTextId">*Name: </label>{" "}
            <label className={styles.stylingError}>{nameError}</label>
            <br />
            <br />
            <input
              type="text"
              id="name"
              required
              onChange={(e) => validateName(e)}
            />
            <br />
            <label>*E-mail: </label>{" "}
            <label className={styles.stylingError}>{emailError}</label>
            <br />
            <br />
            <input
              type="text"
              id="userEmail"
              required
              onChange={(e) => validateEmail(e)}
            />
            <label>*Phone No: </label>{" "}
            <label className={styles.stylingError}>{mobileNumberError}</label>
            <br />
            <input
              type="text"
              id="mobile"
              required
              onChange={(e) => validateMobileNumber(e)}
            />
            <br />
            <label htmlFor="myDropdownId">City: </label>
            <select
              className={styles.dropDown}
              name="myDropdown"
              id="myDropdownId"
            >
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Mohali">Mohali</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Hyderbad">Hyderbad</option>
            </select>
            <br />
            <br />
            <label>Zip Code: </label>
            <br />
            <input type="text" name="zipcode" id="zipcode" />
            <br />
            <label>Comments: </label>
            <br />
            <input type="text" name="comments" id="comments" />
            <br />
            <label>Subscribe for Daily Update: </label>
            <label>Yes</label>
            <input type="checkbox" name="Yes" id="yes-yes" value="y" />
            <label>No</label>
            <input type="checkbox" name="No" id="no-no" value="n" />
            <br />
            <input
              className={styles.submitButton}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
