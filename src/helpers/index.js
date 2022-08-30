export const getLang = () => {
  return JSON.parse(localStorage.getItem("i18nextLng"));
};
