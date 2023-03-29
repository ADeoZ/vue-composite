import { computed, ref } from "vue";

export const useSort = (sourceList) => {
  const sortOptions = [
    { label: "По наименованию", value: "name" },
    { label: "По цене min", value: "priceUp" },
    { label: "По цене max", value: "priceDown" },
  ];

  const selectedSort = ref("");

  const sortedList = computed(() => {
    const compare = {
      name: (a, b) => a.name.localeCompare(b.name),
      priceUp: (a, b) => a.price - b.price,
      priceDown: (a, b) => b.price - a.price,
    };
    return [...sourceList.value].sort(compare[selectedSort.value || "name"]);
  });

  return { sortOptions, selectedSort, sortedList };
};
