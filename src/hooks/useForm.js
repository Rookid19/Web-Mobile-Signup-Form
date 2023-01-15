import { useCallback, useEffect, useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    email: "randyodoom19@ymail.com",
    password: "Randy123",
    confirmPassword: "Randy123",
    phone: "",
    region: "",
    ssn: "",
    pin: "",
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
        [name]: name === "phone" ? value.replace(/\D/g, "") : value,
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
