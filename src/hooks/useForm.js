import { useCallback, useEffect, useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    region: "",
    ssn: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});
  // const [valid, setValid] = useState(null);
  useEffect(() => {
    // setErrors(validate(values));
    // console.log("errors ---> " + JSON.stringify(errors));
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

  const handleSubmit = () => {
    setErrors(validate(values));
  };
  console.log("erros---> " + JSON.stringify(errors));

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleOnchange,
    handleSubmit,
  };
};

export default useForm;
