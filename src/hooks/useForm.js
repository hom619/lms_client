import { useEffect, useState } from "react";
import { errorValidator } from "../utils/validatePassword";
const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
};
export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [passwordErrors, setPasswordErrors] = useState([]);

  //only when password and confirm Password changes

  useEffect(() => {
    const errorList = errorValidator(form.password, form.confirmPassword);
    setPasswordErrors(errorList);
  }, [form.password, form.confirmPassword]);
  return {
    form,
    setForm,
    passwordErrors,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};
