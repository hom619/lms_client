export const errorValidator = (password = "", confirmPassword = "") => {
  const error = [];
  password.length < 6 && error.push("At least 6 characters required");

  !/[A-Z]/.test(password) &&
    error.push("Password must contain at least one uppercase letter");

  !/[a-z]/.test(password) &&
    error.push("Password must contain at least one lowercase letter");

  !/[0-9]/.test(password) &&
    error.push("Password must contain at least one number");

  !/[!@#$%^&*()_+{}|<>?/]/.test(password) &&
    error.push(
      "Password must contain at least one special character !@#$%^&*()_+{}|<>?/ "
    );

  password !== confirmPassword && error.push("Passwords don't match");
  return error;
};
