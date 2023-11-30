// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let number = 0.1 + 0.2;

number = number.toFixed(1);

console.log(+number);

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let string = "1";

let number1 = 2;

console.log(+string + number1);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let gb = prompt("Вкажіть обсяг флешки в Гб");

let mb = gb * 1024;

let fileSize = 820;

let files = Math.floor(mb / fileSize);

console.log("Кількість файлів: ", files);

// 4. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let chocolate = prompt("Ціна шоколадки");

let cash = prompt("Сума грошей в гаманці");

let chocolateBuy = Math.floor(cash / chocolate);

let change = cash - chocolateBuy * chocolate;

console.log("Кількість шоколадок: ", chocolateBuy);

console.log("Решта: ", change);

// 5. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let number2 = prompt("Введіть число");

let returnNumber = null;

if (number2.length === 3) {
  while (number2 > 0) {
    returnNumber = returnNumber * 10 + (number2 % 10);
    number2 = Math.floor(number2 / 10);
  }
  console.log("Виведення задом наперед: ", returnNumber);
} else {
  console.log("Число має бути трьохзначним");
}

// 6. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let money = prompt("Сума вкладу в банк");

const months = 2;

const rate = 5;

const annualRate = rate / 100;

const monthlyRate = annualRate / 12;

const interest = money * monthlyRate * months;

const formattedInterest = interest.toFixed(2);

console.log("Сумма відсотків: ", +formattedInterest);
