import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, combineReducers, applyMiddleware } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import logger from "redux-logger";

import cabinetReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  cabinetReducer: persistReducer(persistConfig, cabinetReducer),
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);
export { store, persistor };
