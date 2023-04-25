export const format = {
  price: (value) => {
    const priceToNum = +value.replace(/\s/g, "");
    return !priceToNum ? value : Intl.NumberFormat().format(priceToNum);
  },
};
