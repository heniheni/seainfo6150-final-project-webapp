import React, { useState } from "react";
import styles from "./FeedBackForm.module.css";
import { Link } from "react-router-dom";

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
      setNameError("Enter Alphabet Character Only");
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
      setEmailError("Enter Valid Email E.g. userXXX@outlook.com");
    } else {
      setEmailError("");
    }
  };

  const [mobileNumberError, setMobileNumberError] = useState();
  const validateMobileNumber = (e) => {
    var mobile = e.target.value;
    if (!mobile.match(/^[0-9]{10}$/)) {
      setMobileNumberError("Enter valid Phone Number");
    } else {
      setMobileNumberError("");
    }
  };

  return (
    <div>
        <Link className={styles.stylingBreadCrumb} to="/">Home {' > '}</Link><Link className={styles.stylingBreadCrumb} to="/Form"> FeedbackForm</Link>
        
      {submittedForm ? (
        <div className={styles.inputDataContainer}>
          <h1>Thank You !! We got your Feedback</h1>
          <div className={styles.fields}>
            <b>Name: </b> {submittedForm.get("name")}
          </div>
          
          <div className={styles.fields}>
            <b>I have a Feedback About: </b>{submittedForm.get("myDropdown")}
          </div>

          <div className={styles.fields}>
            <b>Did you Achieve your Goal? </b>{submittedForm.get("radio")}
          </div>

          <div className={styles.fields}>
            <b>E-mail: </b>{submittedForm.get("email")}
          </div>

          <div className={styles.fields}>
            <b>Phone No: </b>{submittedForm.get("mobile")}
          </div>

          <div className={styles.fields}>
            <b>City: </b>{submittedForm.get("myDropdownCity")}
          </div>

          <div className={styles.fields}>
            <b>Zipcode: </b>{submittedForm.get("zipcode")}
          </div>

          <div className={styles.fields}>
            <b>Comments: </b>{submittedForm.get("comments")}
          </div>

          <div className={styles.fields}>
            <b>Which team do you support? </b>{submittedForm.get("checkbox1")} {submittedForm.get("checkbox2")}
            {submittedForm.get("checkbox3")} {submittedForm.get("checkbox4")} {submittedForm.get("checkbox5")} {submittedForm.get("checkbox6")}
            {submittedForm.get("checkbox7")} {submittedForm.get("checkbox8")}
            
          </div> 
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className={styles.formContainer}>
            <h1 className={styles.formName}>Feedback Form</h1>
            <p className={styles.subText}>
              Please fill in this form to give your Feedback.
              <br />
              <br />
              <i>Fields' marked with * are mandatory </i>
            </p>
            
            <hr />
            <label>I have a Feedback About: </label>
            <select name="myDropdown">
              <option value="Website Issue">Website Issue</option>
              <option value="My Experience">My Experience</option>
              <option value="Improvement">Improvement</option>
            </select>
            <br />
            <label>Did you Achieve your Goal? </label>
            <label>Yes</label>
            <input type="radio" name="radio" id="foo-yes" value="yes" />
            <label>No</label>
            <input type="radio" name="radio" id="foo-no" value="no" />
            <label>Maybe</label>
            <input type="radio" name="radio" id="foo-maybe" value="maybe" />
            <br />
            <label >*Name: </label>{" "}
            <label className={styles.stylingError} >{nameError}</label>
            <br />
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ella Steel"
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
              name="email"
              placeholder="ella@outlook.com"
              required
              onChange={(e) => validateEmail(e)}
            />
            <label>*Phone No: </label>{" "}
            <label className={styles.stylingError}>{mobileNumberError}</label>
            <br />
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="2004001110"
              required
              onChange={(e) => validateMobileNumber(e)}
            />
            <br />
            <label htmlFor="myDropdownId">City: </label>
            <select
              className={styles.dropDown}
              name="myDropdownCity"
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
            <input type="text" name="zipcode" id="zipcode" placeholder="98121" />
            <br />
            <label>Comments: </label>
            <br />
            <input type="text" name="comments" id="comments" placeholder="Type Here" />
            <br />
            <label>Which team do you support? </label>
            <label>RCB</label>
            <input type="checkbox" name="checkbox1"  value="RCB" />
            <label>CSK</label>
            <input type="checkbox" name="checkbox2"  value="CSK" />
            <label>MI</label>
            <input type="checkbox" name="checkbox3"  value="MI" />
            <label>DC</label>
            <input type="checkbox" name="checkbox4"  value="DC" />
            <label>KKR</label>
            <input type="checkbox" name="checkbox5" value="KKR" />
            <label>PBKS</label>
            <input type="checkbox" name="checkbox6"  value="PBKS" />
            <label>RR</label>
            <input type="checkbox" name="checkbox7"  value="RR" />
            <label>SRH</label>
            <input type="checkbox" name="checkbox8"  value="SRH" />
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
