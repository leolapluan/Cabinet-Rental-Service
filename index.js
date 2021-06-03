// import registerRootComponent from "expo/build/launch/registerRootComponent";
import registerRootComponent from "./node_modules/expo/build/launch/registerRootComponent";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import React from "react";

function RNRedux() {
  return (
    <Provider store={store}>
      <App />
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
