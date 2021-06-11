import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["bookmarks"],
};

rootReducer = combineReducers({
  booksReducer: persistReducer(persistConfig, booksReducer),
});
// Note: this API requires redux@>=3.1.0
export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
