export default function ValidateInfo(values) {
  let errors = {};

  if (!values.password.trim()) {
    errors.passwordRequired = "Password is required";
  } else if (values.password.length < 8) {
    errors.passwordLength = "Password must be at least 8 characters";
  }
  
}
