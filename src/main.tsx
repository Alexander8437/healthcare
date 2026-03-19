
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Router from "./app/router"
import "./index.css"

navigator.serviceWorker.register("/sw.js")

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("SW Registered"))
    .catch((err) => console.log(err))
}

ReactDOM.createRoot(document.getElementById("root")!).render(
 <Provider store={store}>
   <Router/>
 </Provider>
)