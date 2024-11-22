import store from "./redex/store.js";
import getCurrentTime from "./utils/getCurrentTime.js";


const btn = document.getElementById("btn");
btn.addEventListener("click", ()=> {
  store.dispatch({
    type: "ADD_CURRENT_TIME",
    payload: getCurrentTime()
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
