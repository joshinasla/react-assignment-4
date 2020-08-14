import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import DisplayList from "./pages/DisplayList/DisplayList";
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/list" component={DisplayList} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
