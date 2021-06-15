// import registerRootComponent from "expo/build/launch/registerRootComponent";
import registerRootComponent from "./node_modules/expo/build/launch/registerRootComponent";
import App from "./App";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

function RNRedux() {
  // const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

registerRootComponent(RNRedux);
// import { AppRegistry } from "react-native";
// import React from "react";
// import App from "./App";
// import { name as appName } from "./app.json";
// import { Provider } from "react-redux";

// import configureStore from "./redux/store";

// const store = configureStore();

// const RNRedux = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// AppRegistry.registerComponent(appName, () => RNRedux);
