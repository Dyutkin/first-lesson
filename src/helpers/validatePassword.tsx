const validatePassword = (password: any): boolean => {
  return (
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(
      password
    ) === true
  );
};

export default validatePassword;
