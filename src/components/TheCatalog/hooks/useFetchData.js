import { ref, watch } from "vue";

export const useFetchData = (fetchMethod, localStorageKey) => {
  const data = ref([]);
  const isLoading = ref(false);

  const fetchData = async () => {
    const localData = JSON.parse(localStorage.getItem(localStorageKey));
    if (localData) {
      data.value = localData;
      return;
    }

    try {
      isLoading.value = true;
      const response = await fetchMethod();
      data.value = response.data;

      localStorage.setItem(localStorageKey, JSON.stringify(response.data));
    } catch (e) {
      console.error("Ошибка загрузки");
    } finally {
      isLoading.value = false;
    }
  };

  watch(data, () => {
    localStorage.setItem(localStorageKey, JSON.stringify(data.value));
  });

  return { fetchData, data, isLoading };
};
