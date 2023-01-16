import { useCallback, useEffect, useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "randyodoom19@ymail.com",
    password: "Randy@123",
    confirmPassword: "Randy@123",
    phone: "",
    region: "",
    ssn: "",
    pin: "",
    dob: "",
    payID: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  const handleOnchange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]:
          name === "phone"
            ? value.replace(/\D/g, "")
            // : name === "dob"
            // ? value.replace(/\//g, "-")
            : value,
      });
    },
    [values]
  );

  useEffect(() => {
    if (values.phone[0] === "0") {
      setValues({
        ...values,
        phone: "",
      });
    }
  }, [values]);

  // const handleSubmit = () => {
  //   setErrors(validate(values));
  // };
  console.log("erros---> " + JSON.stringify(errors));

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleOnchange,
    // handleSubmit,
    // valid
  };
};

export default useForm;
