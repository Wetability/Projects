// ? 1. Напиши всі можливі варіанти створення функцій.

/* function nameFunction() {

}

let nameFunction = function () {

} */

// ? 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

/* function getArguments() {
  console.log(`Кількість переданих аргументів ${arguments.length}`);
}

//* Має видати, що кількість аргументів = 4.
getArguments("arg", "fsssd", 1, true); */

// ? 3. Напиши функцію, яка приймає 2 числа і повертає : -1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.

/* function compareNumbers(number1, number2) {
  if (number1 < number2) console.log(-1);
  else if (number1 > number2) console.log(1);
  else console.log(0);
}

compareNumbers(3, 3); */

// ? 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

/* function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else {
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

const result = factorial(5);

console.log(result); */

// ? 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

/* function processNumbers(number1, number2, number3) {
  if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    return number1.toString() + number2.toString() + number3.toString();
  } else throw new Error("Помилка");
}

const numberToString = processNumbers("sda", "sd", "asdass");

console.log(numberToString); */

// ? 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

/* function calculateArea(length, width) {
  if (width === undefined && length !== null && !isNaN(length) && length !== "")
    return length * length;
  else if (
    calculateArea.length === 2 &&
    length !== null &&
    !isNaN(length) &&
    length !== "" &&
    width !== null &&
    width !== "" &&
    !isNaN(width)
  )
    return length * width;
  else return "Помилка";
}

const rectangleArea = calculateArea(4, 8);
console.log(rectangleArea);

const squareArea = calculateArea(2);
console.log(squareArea);

const errorMessage = calculateArea("", "");
console.log(errorMessage);

const anotherErrorMessage = calculateArea();
console.log(anotherErrorMessage); */

// ? 7. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

/* function findPerfectNumber(limit) {
  for (let num = 2; num <= limit; num++) {
    let sum = 1;

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        sum += i;
        if (i * i !== num) {
          sum += num / i;
        }
      }
    }

    if (sum === num) {
      console.log("Досконале число:", num);
    }
  }
}

const limit = 100;
findPerfectNumber(limit); */
