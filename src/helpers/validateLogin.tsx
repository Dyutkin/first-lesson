const validateLogin = (login: string): boolean => {
  return /^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(login) === true;
};

export default validateLogin;
