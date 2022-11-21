import "./styles.css";

const onClickAdd = () => {
  alert();
};

document
  .getElementById("add-button")
  //対象の要素.addEventListener(種類, 関数);
  .addEventListener("click", () => onClickAdd());
