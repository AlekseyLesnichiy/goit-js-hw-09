// Описан в документации
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  "inputTime": document.querySelector("#datetime-picker"),
  "days": document.querySelector("[data-days]"),
  "minutes": document.querySelector("[data-minutes]"),
  "hours": document.querySelector("[data-hours]"),
  "seconds": document.querySelector("[data-seconds]"),
  "startBtn": document.querySelector("[data-start]"),
}




refs.inputTime.disabled = false;
let chosenDate = "";
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if ((options.defaultDate.getTime()) > selectedDates[0].getTime()) {
      // window.alert("Please choose a date in the future");
    Notiflix.Report.failure(
  'ERROR',
  'Please choose a date in the future',
  'Click Me!',
  {
    width: '360px',
    svgSize: '120px',
  },
);
    }
    
    chosenDate = selectedDates[0];
    changeTimeToObj(convertMs(chosenDate - new Date()));
    }
}
  

 function startCount() {
   refs.startBtn.disabled = true;
   refs.inputTime.disabled = true;
  timerId = setInterval(() => {
      let timeDiff = convertMs(chosenDate - new Date());
    let timeDiffNum = (chosenDate.getTime() - new Date().getTime());
    
     if (timeDiffNum <= 0) {
        clearInterval(timerId);
        return
     }
     changeTimeToObj(timeDiff);
  }, 1000);
    
}
refs.startBtn.addEventListener("click", startCount);



const myPicker = flatpickr(refs.inputTime, options);

function changeTimeToObj({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);

}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

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



