const listItems = document.querySelector("#list");
const searchField = document.querySelector("#searchField");

const shoppingList = [
  "Frutas",
  "Legumes",
  "Verduras",
  "Carne",
  "Frango",
  "Massas",
  "Limpeza",
  "Higiene",
];

searchField.addEventListener("input", inputHandle);

function fillList(list = shoppingList) {
  listItems.innerHTML = "";
  list.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    listItems.appendChild(li);
  });
}

fillList();

function inputHandle() {
  const filteredList = shoppingList.filter((item) => {
    const listItem = item.toLowerCase();
    const searchValue = searchField.value.toLowerCase();
    return listItem.includes(searchValue);
  });

  fillList(filteredList);
}

console.log(listItems, searchField);
