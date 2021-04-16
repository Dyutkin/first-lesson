const validateEmail = (email: string): boolean => {
  const re = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
  return re.test(String(email).toLowerCase());
};

export default validateEmail;
