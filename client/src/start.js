import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  App from "./app";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);


// function HelloWorld() {
//     return  <div>Hello, World!</div>;
// }

const elem = (
    <Provider store={store}>
        <App />
    </Provider>
);
// init(store);

// ReactDOM.render(<HelloWorld />, document.querySelector("main"));

ReactDOM.render(elem, document.querySelector("main"));