import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import NavBar from './navbar/NavBar'
import * as serviceWorker from './serviceWorker'
import { MobileView, BrowserView } from 'react-device-detect'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <div className={"page-wrapper"}>
                <NavBar />
                <BrowserView>
                    <App />
                </BrowserView>
                <MobileView>
                    <div className={"mobile-view-wrapper"}>
                        <div className={"mobile-view"}>
                            <p>Sorry, there's no mobile support for REST for the Wicked at this time. 
                            Please come back on a desktop device.</p>
                        </div>
                    </div>
                </MobileView>
            </div>
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
