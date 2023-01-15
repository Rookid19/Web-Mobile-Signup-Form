export default function Validate(values) {
  let errors = {};

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

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.dob.trim()) {
    errors.dob = "Date of birth is required";
  } else if (
    !/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/i.test(
      values.dob
    )
  ) {
    errors.dob = "Wrond Date of birth format";
  }

  return errors;
}
