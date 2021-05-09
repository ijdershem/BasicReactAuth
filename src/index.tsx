import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { configureStore } from './redux/store';
import "./assets/scss/style.scss"
import Router from './routes/router';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router/>
    </Provider>,
    document.getElementById('root')
)
