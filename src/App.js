import './App.scss';
import React from 'react';
import './fonts/roboto/roboto.css';
import {PizzaConstructor} from './pages/componentPizzaConstructor/PizzaConstructor';
import {Provider} from "react-redux";
import {store} from "./redux/storeWithMiddleWare";

export const App = () => {
  return (
      <Provider store={store}>
        <PizzaConstructor />
      </Provider>
  )
}
