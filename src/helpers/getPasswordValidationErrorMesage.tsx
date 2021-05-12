const getPasswordValidationErrorMesage = (data: string) => {
  if (/(?=.*[0-9])/.test(data) === false) {
    return "At least one number is required";
  }
  if (/(?=.*[!@#$%^&*])/.test(data) === false) {
    return "special !@#$%^&* is required";
  }
  if (/(?=.*[a-z])/.test(data) === false) {
    return "requires one lowercase latin letter";
  }
  if (/(?=.*[A-Z])/.test(data) === false) {
    return "requires one uppercase latin letter";
  }
  if (data.length < 6) {
    return "Login must contain 6+ characters";
  }
  return "";
};

export default getPasswordValidationErrorMesage;
