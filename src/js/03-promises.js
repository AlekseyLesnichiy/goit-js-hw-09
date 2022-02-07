
const refs = {
  "delay": document.querySelector("[data-delay]"),
  "step": document.querySelector("[data-step]"),
  "amount": document.querySelector("[data-amount]"),
  "submitBtn": document.querySelector("button"),
  "form": document.querySelector(".form"),
}

refs.form.addEventListener("submit", evt)
function evt(event) {
  event.preventDefault();
}

refs.submitBtn.addEventListener("click", callFunc);


function createPromise(position, delay) {
  return new Promise((resolve, reject) =>
  {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  
})
}
function callFunc() {
  amount = Number(refs.amount.value) ;
  delay = Number(refs.delay.value);
  step = Number(refs.step.value);
  for (let position = 1; position <= amount; position += 1){
    createPromise(position, delay)
      .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  }
}
// createPromise(2, 1500)
  // .then(({ position, delay }) => {
  //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  // })
  // .catch(({ position, delay }) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  // });