import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n/configs'
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux'
import store from './redux/store'
moment.locale('zh-cn');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

