const getPasswordValidationErrorMesage = (data: string) => {
  if (/(?=.*[0-9])/.test(data) === false) {
    return "At least one number is required";
  }
  if (/(?=.*[!@#$%^&*])/.test(data) === false) {
    return "at least one special character is required !@#$%^&*";
  }
  if (/(?=.*[a-z])/.test(data) === false) {
    return "requires at least one lowercase latin letter";
  }
  if (/(?=.*[A-Z])/.test(data) === false) {
    return "requires at least one uppercase latin letter";
  }
  return "";
};

export default getPasswordValidationErrorMesage;
