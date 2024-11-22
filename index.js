import store from "./redex/store.js";
import { addCurrentTime, clearTimes } from "./redex/actionCreators.js";


const addTimeBtn = document.getElementById("addTime");
addTimeBtn.addEventListener("click", ()=> {
  store.dispatch(addCurrentTime())
})


const clearTimeBtn = document.getElementById("clearTimes");
clearTimeBtn.addEventListener("click", ()=> {
  store.dispatch(clearTimes())
})

const timesList = document.getElementById("timesList");

store.subscribe(() => {
  timesList.innerHTML = "";
  const times = store.getState()
  times.forEach((time) => {
    let li = document.createElement("li")
    li.innerText = time;
    timesList.appendChild(li)
  })
})




// const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store just changed! ${store.getState()}`))

// store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "11:30:00",
// });

// unsubscribe()

// store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "11:45:00",
// });

// store.dispatch({
//   type: "CLEAR_ALL_TIMES",
// });
