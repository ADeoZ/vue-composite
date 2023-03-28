import { ref } from "vue";

export const useFetchData = (fetchMethod) => {
  const data = ref([]);
  const isLoading = ref(false);

  const fetchData = async () => {
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
