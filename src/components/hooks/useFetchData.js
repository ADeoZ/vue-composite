import { ref, watch, onMounted } from "vue";
import { getItemList } from "@/api/catalogAPI";

const fetchMethod = getItemList;
const localStorageKey = "catalog";

const localData = JSON.parse(localStorage.getItem(localStorageKey));
const data = ref(localData ?? []);

export const useFetchData = () => {
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

  onMounted(fetchData);

  return { data, isLoading };
};
