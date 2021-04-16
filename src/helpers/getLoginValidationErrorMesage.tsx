const getLoginValidationErrorMesage = (data: string) => {
  if (/^[a-zA-Z1-9]+$/.test(data) === false) {
    return "Login must contain only Latin letters";
  }
  if (data.length < 4 || data.length > 20) {
    return "Login must be between 4 and 20 characters";
  }
  if (parseInt(data.substr(0, 1), 10)) {
    return "Login must start with a letter";
  }
  return "";
};

export default getLoginValidationErrorMesage;
