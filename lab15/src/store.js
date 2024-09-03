// store.js
import { createStore } from "redux";
import sudokuReducer from "./reducers";

const store = createStore(sudokuReducer);

export default store;