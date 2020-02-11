import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./create-store";
import { connect } from "react-redux";
import { addCount, deleteCount } from "./store/user";
import "./styles.css";

const AppView = ({ counts, addCount, deleteCount }) => {
  return (
    <div className="App">
      <h1>counts: {counts}</h1>
      <button onClick={addCount}>Добавить count</button>
      <button onClick={deleteCount}>Удалить count</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counts: state.countReducer.counts
  };
};

const mapDispatchToProps = dispatch => ({
  addCount: () => {
    return dispatch(addCount());
  },
  deleteCount: () => {
    return dispatch(deleteCount());
  }
});

const appEnhance = connect(
  mapStateToProps,
  mapDispatchToProps
);

const App = appEnhance(AppView);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
