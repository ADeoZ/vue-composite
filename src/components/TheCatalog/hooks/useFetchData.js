import { ref, watch } from "vue";

export const useFetchData = (fetchMethod, localStorageKey) => {
  const localData = JSON.parse(localStorage.getItem(localStorageKey));
  const data = ref(localData ?? []);
  watch(data, () => {
    localStorage.setItem(localStorageKey, JSON.stringify(data.value));
  });

  const isLoading = ref(false);

  const fetchData = async () => {
    if (localData) return;

    try {
      isLoading.value = true;
      const response = await fetchMethod();
      data.value = response.data;
    } catch (e) {
      console.error("Ошибка загрузки");
    } finally {
      isLoading.value = false;
    }
  };

  return { fetchData, data, isLoading };
};
