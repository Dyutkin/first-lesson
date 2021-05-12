const getEmailValidationErrorMesage = (data: string) => {
  if (
    /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(
      data
    ) === false
  ) {
    return "Email must be in login@domen.ru format ";
  }
  return "";
};

export default getEmailValidationErrorMesage;
