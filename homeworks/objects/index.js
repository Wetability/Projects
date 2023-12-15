/* 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
 1. Метод, який виводить на екран інформацію про автомобіль.
 2. Додавання ім’я водія у список
 3. Перевірка водія на наявність його ім’я у списку
 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */

const car = {
  manufacturer: "BMW",
  model: "X5",
  year: 2022,
  averageSpeed: 90,
  fuelTankCapacity: 60,
  fuelConsumption: 7.5,
  drivers: {},

  displayInfo() {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Average Speed: ${this.averageSpeed} km/h`);
    console.log(`Fuel Tank Capacity: ${this.fuelTankCapacity} liters`);
    console.log(`Fuel Consumption: ${this.fuelConsumption} liters/100 km`);
  },

  displayDrivers() {
    let driversList = "";

    for (let driverName in this.drivers) {
      if (this.drivers.hasOwnProperty(driverName)) {
        driversList += `${driverName} `;
      }
    }
    console.log(`Drivers: ${driversList}`);
  },

  addDriver(driverName) {
    this.drivers[driverName] = true;
  },

  isDriverAvaible(driverName) {
    return this.drivers.hasOwnProperty(driverName);
  },

  calculateTimeAndFuel(distance) {
    const hours = distance / this.averageSpeed;
    const breaks = Math.floor(hours / 4);
    const totalTime = hours + breaks;
    const fuelNeeded = (this.fuelConsumption * distance) / 100;

    return { totalTime, fuelNeeded };
  },
};

// Info about car
car.displayInfo();

// Add driver & display avaible or not
car.addDriver("John");
console.log(car.isDriverAvaible("John"));

// Display driver
car.displayDrivers();

// Add another driver & display drivers & display avaible or not
car.addDriver("Tom");
car.displayDrivers();
console.log(car.isDriverAvaible("Tom"));

// Calculate the time and fuel needed to cover the distance
const distance = 300;
const { totalTime, fuelNeeded } = car.calculateTimeAndFuel(distance);
console.log(`Total Time: ${totalTime} hours`);
console.log(`Fuel Needed: ${fuelNeeded} liters`);

/* 2. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
1. Для виведення часу на екран.
2. Зміни часу на передану кількість секунд.
3. Зміни часу на передану кількість хвилин.
4. Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин. */

const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  displayTime() {
    return `${this.hours.toString().padStart(2, "0")}:${this.minutes
      .toString()
      .padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;
  },

  changeTimeBySeconds(seconds) {
    this.seconds += seconds;
    this.minutes += Math.floor(this.seconds / 60);
    this.seconds %= 60;

    this.hours += Math.floor(this.minutes / 60);
    this.minutes %= 60;
  },

  changeTimeByMinutes(minutes) {
    this.minutes += minutes;
    this.hours += Math.floor(this.minutes / 60);
    this.minutes %= 60;
  },

  changeTimeByHours(hours) {
    this.hours += hours;
  },
};
