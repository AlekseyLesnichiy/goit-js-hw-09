// Описан в документации
import flatpickr from "flatpickr";

// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// Форматирование времени
// Функция convertMs() возвращает объект с рассчитанным оставшимся временем до конечной даты.
// Обрати внимание, что она не форматирует результат.То есть,
//     если осталось 4 минуты или любой другой составляющей времени,
//     то функция вернет 4, а не 04.
//         В интерфейсе таймера необходимо добавлять 0 если в числе меньше двух символов.
//         Напиши функцию addLeadingZero(value),
//     которая использует метод метод padStart() и перед отрисовкой интефрейса форматируй значение.






const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
