// ? 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

/* const age = prompt("Вкажи свій вік");

if (!isNaN(age) && age !== null && age !== "") {
  switch (true) {
    case age <= 11:
      console.log("Дитина");
      break;

    case age <= 17 && age > 11:
      console.log("Підліток");
      break;

    case age <= 59 && age > 17:
      console.log("Доросла людина");
      break;

    case age >= 60:
      console.log("Пенсіонер");
      break;

    default:
      console.log(
        "Помилка, ви ввели невірне значення, введіть будь ласка число!"
      );
      break;
  }
} else {
  console.log("Помилка, ви ввели невірне значення, введіть будь ласка число!");
} */

// ? 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

/* let input = prompt("Введіть число від 0 до 9");

if (input !== null && input !== "") {
  switch (input) {
    case "1":
      console.log("!");
      break;

    case "2":
      console.log("@");
      break;

    case "3":
      console.log("#");
      break;

    case "4":
      console.log("$");
      break;

    case "5":
      console.log("%");
      break;

    case "6":
      console.log("^");
      break;

    case "7":
      console.log("&");
      break;

    case "8":
      console.log("*");
      break;

    case "9":
      console.log("(");
      break;

    case "0":
      console.log(")");
      break;

    default:
      console.log("Помилка!");
      break;
  }
} else {
  console.log("Помилка!");
} */

// ? 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

/* const firstNumber = parseInt(prompt("Введіть перше число"));

const lastNumber = parseInt(prompt("Введіть останнє число"));

let sum = 0;

if (
  !isNaN(firstNumber) &&
  !isNaN(lastNumber) &&
  firstNumber !== null &&
  lastNumber !== null &&
  firstNumber !== "" &&
  lastNumber !== "" &&
  firstNumber <= lastNumber
) {
  for (let i = firstNumber; i <= lastNumber; i++) {
    sum += i;
  }
} else {
  console.log("Введіть числа правильно");
}
console.log(sum); */

// ? 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

/* let number1 = parseInt(prompt("Введіть перше число"));

let number2 = parseInt(prompt("Введіть друге число"));

if (
  !isNaN(number1) &&
  !isNaN(number2) &&
  number1 !== null &&
  number2 !== null &&
  number1 !== "" &&
  number2 !== ""
) {
  let a = Math.abs(number1);

  let b = Math.abs(number2);

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  let gcd = a === 0 ? b : a;

  console.log(gcd);
} else {
  console.log("Помилка!");
} */

// ? 5. Запитай у користувача число і виведи всі дільники цього числа.

/* const userNumber = parseInt(prompt("Введіть число"));

if (!isNaN(userNumber) && userNumber !== null && userNumber !== "") {
  for (i = 1; i <= userNumber; i++) {
    if (userNumber % i === 0) {
      console.log(i);
    }
  }
} else {
  console.log("Помилка, невірно введене число!");
} */

// ? 6. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

/* const number = prompt("Введіть п'ятизначне число:");

if (!isNaN(number) && number !== "" && number !== null && number.length === 5) {
  if (number[0] === number[4] && number[1] === number[3]) {
    console.log(`${number} є паліндромом.`);
  } else {
    console.log(`${number} не є паліндромом.`);
  }
} else {
  console.log("Будь ласка введіть п'ятизначне число.");
} */

// ? 7. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою: від 200 до 300 - знижка буде 3%; від 300 до 500 - 5%; від 500 і вище - 7%.

/* const price = prompt("Введіть суму покупки");

if (!isNaN(price) && price !== null && price !== "") {
  switch (true) {
    case 200 <= price && price < 300:
      console.log("Знижка буде 3%");
      break;
    case 300 <= price && price < 500:
      console.log("Знижка буде 5%");
      break;
    case 500 <= price:
      console.log("Знижка буде 7%");
      break;
    default:
      console.log("Знижка відсутня");
      break;
  }
} else {
  console.log("Введіть число");
} */

// ? 8. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.

/* let count = 10;

let positiveCount = 0,
  negativeCount = 0,
  zeroCount = 0,
  evenCount = 0,
  oddCount = 0;

for (i = 0; i < count; i++) {
  let userNumber = parseFloat(prompt("Введіть число"));

  if (!isNaN(userNumber) && userNumber !== "" && userNumber !== null) {
    if (userNumber === 0) {
      zeroCount++;
    } else {
      if (userNumber > 0) {
        positiveCount++;
      } else {
        negativeCount++;
      }
      if (userNumber % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  } else {
    console.log("Ви ввели не число, введіть число!");
    break;
  }
}

console.log("Додатні числа:", positiveCount);
console.log("Від`ємні числа:", negativeCount);
console.log("Нулі:", zeroCount);
console.log("Парні числа", evenCount);
console.log("Непарні числа", oddCount); */

// ? 9. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

/* let index = 1;

let userResponse;

do {
  let day;

  switch (index) {
    case 1:
      day = "Сьогодні Понеділок";
      break;

    case 2:
      day = "Сьогодні Вівторок";
      break;

    case 3:
      day = "Сьогодні Середа";
      break;

    case 4:
      day = "Сьогодні Четвер";
      break;

    case 5:
      day = "Сьогодні П'ятниця";
      break;

    case 6:
      day = "Сьогодні Субота";
      break;

    case 7:
      day = "Сьогодні Неділя";
      break;
  }

  userResponse = confirm(`${day}. Хочеш побачити наступний день?`);

  index = (index % 7) + 1;
} while (userResponse); */
