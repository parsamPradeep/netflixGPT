export const checkValiData = (email, password) => {
  const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPassValid) return "Password is not valid";
  return null;
};
