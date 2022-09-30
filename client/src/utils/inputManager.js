export const getTextareaValueById = (id) => {
  const textarea = document.getElementById(id);

  return textarea ? textarea.value : "";
};
