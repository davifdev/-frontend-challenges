const shoppingList = [
  "Arroz",
  "Feijão",
  "Carne",
  "Verduras",
  "Cuscuz",
  "Frutas",
];

const listElement = document.querySelector("#list");
const searchField = document.querySelector("#searchField");

searchField.addEventListener("input", inputHandler);

fillList();

function fillList(list = shoppingList) {
  console.log(list);
  listElement.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    listElement.appendChild(li);
  });
}


function inputHandler() {
  const filteredList = shoppingList.filter((item) => {
    const listItem = item.toLowerCase();
    const searchWord = searchField.value.toLowerCase();
    return listItem.includes(searchWord);
  });

  fillList(filteredList);
}
