import { useCallback, useEffect, useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    phone: "",
    region: "",
    ssn: "",
    pin:""
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(null);

  //
  //   useEffect(() => {
  //     setErrors(validate(values));
  //   }, [values, validate]);

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

  return {
    values,
    setValues,
    errors,
    setErrors,
    valid,
    handleOnchange,
  };
};

export default useForm;
