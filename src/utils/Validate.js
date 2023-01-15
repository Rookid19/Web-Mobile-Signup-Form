export default function Validate(values) {
  let errors = {};

  //first name validation
  if (!values.firstname.trim()) {
    errors.firstname = "First name is required";
  } else if (values.firstname.length > 1) {
    errors.firstnameLength = "First name must be 2 characters long";
  }

  //last name validation
  if (!values.lastname.trim()) {
    errors.lastname = "Last name is required";
  } else if (values.lastname.length > 1) {
    errors.lastnameLength = "Last name must be 2 characters long";
  }

  //password validation
  if (!values.password.trim()) {
    errors.passwordRequired = "Password is required";
  } else if (values.password.length < 8) {
    errors.passwordLength = "Password must be at least 8 characters";
  }
  if (!/^(?=.*[A-Z])(?=.*[a-z]).*$/.test(values.password)) {
    errors.passwordCaseSenstive =
      "Password must contain at least one uppercase letter";
  }

  //must contain at least one number
  if (!/^(?=.*[0-9]).*$/.test(values.password)) {
    errors.passwordNumber = "Password must contain at least one number";
  }

  // special character
  if (
    !/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(values.password)
  ) {
    errors.passwordSpecial =
      "Password must contain at least one special symbol";
  }

  // password and confirm password validation
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }

  //email validation
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // date of birth validation
  if (!values.dob.trim()) {
    errors.dob = "Date of birth is required";
  } else if (
    !/^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/([0-9]{4})$/i.test(
      values.dob
    )
  ) {
    errors.dob = "Wrond Date of birth format";
  }

  return errors;
}
