import { ref, watch, onMounted } from "vue";
import { getItemList } from "@/api/catalogAPI";

const fetchMethod = getItemList;
const localStorageKey = "catalog";

const localData = JSON.parse(localStorage.getItem(localStorageKey));
const itemList = ref(localData ?? []);

const deleteItem = (deleteId) => (itemList.value = itemList.value.filter((item) => item.id !== deleteId));

export const useFetchData = () => {
  watch(itemList, () => {
    localStorage.setItem(localStorageKey, JSON.stringify(itemList.value));
  });

  const isLoading = ref(false);

  const fetchData = async () => {
    if (localData) return;

    try {
      isLoading.value = true;
      const response = await fetchMethod();
      itemList.value = response.data;
    } catch (e) {
      console.error("Ошибка загрузки");
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchData);

  return { itemList, isLoading, deleteItem };
};
