import React from "react";
import Home from "./views/index";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import "./global.less";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Provider>
    );
  }
}

export default App;
