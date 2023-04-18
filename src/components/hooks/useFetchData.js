import { ref, watch, onMounted } from "vue";
import { getItemList } from "@/api/catalogAPI";

const fetchMethod = getItemList; // api method
const localStorageKey = "catalog"; // localStorage key to store items

const localData = JSON.parse(localStorage.getItem(localStorageKey));
const itemList = ref(localData ?? []);

// store items in storage
watch(itemList, () => {
  localStorage.setItem(localStorageKey, JSON.stringify(itemList.value));
});

// очистка формы
// проверка loading на кнопку формы
// тест на очень крупные значения и длинные описания
// статус успешного добавления
// переписать метод
// add item
const addItem = (itemData) => {
  const lastId = itemList.value[itemList.value.length - 1].id;
  itemList.value = [...itemList.value, {...itemData, price: +itemData.price.replace(/\s/g, ""), id: lastId + 1}];
  console.log(itemList.value);
}

// delete item
const deleteItem = (deleteId) => (itemList.value = itemList.value.filter((item) => item.id !== deleteId));

// main hook method to fetch data through api
export const useFetchData = () => {
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

  return { itemList, isLoading, addItem, deleteItem };
};
