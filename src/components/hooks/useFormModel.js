import { ref, computed } from "vue";

const getFormModel = (initialModel) => {
  return Object.keys(initialModel).reduce(
    (obj, key) => ({ ...obj, [key]: { value: "", error: null, touched: false } }),
    {}
  );
};

export const useFormModel = (fields) => {
  const formModel = ref(getFormModel(fields));

  const getFormValues = () =>
    Object.keys(formModel.value).reduce(
      (values, field) => ({ ...values, [field]: formModel.value[field].value }),
      {}
    );

  const isFormValid = computed(
    () =>
      !Object.values(formModel.value)
        .map(({ error }) => error)
        .some(Boolean)
  );

  const resetForm = () => (formModel.value = getFormModel(fields));

  return { formModel, getFormValues, isFormValid, resetForm };
};
