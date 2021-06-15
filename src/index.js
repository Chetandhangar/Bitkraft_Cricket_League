import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BitkraftProvider } from './contexts/bitkraft-context';
import { TabProvider } from './contexts/tab-context';
import { CurrentDetailsProvider} from './contexts/current-context';

ReactDOM.render(
  <React.StrictMode>
    <BitkraftProvider>
      <TabProvider>
        <CurrentDetailsProvider>
          <App />
        </CurrentDetailsProvider>
      </TabProvider>     
    </BitkraftProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
