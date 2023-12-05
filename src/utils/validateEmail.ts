const validateEmail = (value: string) =>
  value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi);

export default validateEmail;
