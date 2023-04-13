export const validations = {
  required: { check: (value) => value.length > 0, error: "Поле является обязательным" },
  isNumber: { check: (value) => /^[\d\s]+$/.test(value), error: "Допустимы только цифры" },
};