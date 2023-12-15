// ? 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
const shoppingList = [
  { name: "Молоко", quantity: 7, bought: false, pricePerUnit: 24 },
  { name: "Хліб", quantity: 25, bought: false, pricePerUnit: 8 },
  { name: "Сир", quantity: 50, bought: false, pricePerUnit: 40 },
];

// ? Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
function displayShoppingList(list) {
  const notBought = notBought.filter((item) => !item.bought);
  const bought = bought.filter((item) => item.bought);

  const sortedList = [...notBought, ...bought];
  sortedList.forEach((item) => {
    console.log(
      `${item.name} : ${item.quantity} шт. за ${
        item.pricePerUnit
      } за шт.Всього: ${item.quantity * item.pricePerUnit} грн. ${
        item.bought ? "Куплено" : "Не куплено"
      }`
    );
  });
}

// ? Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function buyProduct(productName) {
  const index = shoppingList.findIndex(
    (item) => item.name === productName && !item.bought
  );

  if (index !== -1) {
    shoppingList[index].bought = true;
    console.log(`${productName} придбано.`);
  } else console.log(`${productName} вже придбано або відсутнє на списку.`);
}

// ? Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім).
function removeProduct(productName) {
  const filteredList = shoppingList.filter((item) => item.name !== productName);

  if (filteredList.length < shoppingList.length) {
    console.log(`${productName} видалено зі списку.`);
    shoppingList = filteredList;
  } else {
    console.log(`${productName} відсутній в списку.`);
  }
}

// ? Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
function addProduct(product) {
  const existingProductIndex = shoppingList.findIndex(
    (item) => item.name === product.name && !item.bought
  );

  if (existingProductIndex !== -1) {
    shoppingList[existingProductIndex].quantity += product.quantity;
    shoppingList[existingProductIndex].total =
      shoppingList[existingProductIndex].quantity *
      shoppingList[existingProductIndex].pricePerUnit;
    console.log(`${product.name} додано до списку.`);
  } else {
    const total = product.quantity * product.pricePerUnit;
    const newProduct = { ...product, total };
    shoppingList.push(newProduct);
    console.log(`${product.name} додано до списку як новий продукт.`);
  }
}
