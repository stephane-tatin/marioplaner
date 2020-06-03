// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware, compose } from "redux"
// import rootReducer from "../src/store/reducer/rootReducer"
// import { Provider } from "react-redux"
// import thunk from "redux-thunk"
// import { reduxFirestore, getFirestore } from "redux-firestore"  
// import {  getFirebase } from "react-redux-firebase"
// import fbConfig from "./config/fbConfig"

// const store = createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reduxFirestore(fbConfig),
//     // reactReduxFirebase(fbConfig)
//     )
//   )

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store = {store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "../src/store/reducer/rootReducer"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { useSelector } from 'react-redux'

import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig)
    )
);


const rrfConfig = {
    userProfile: 'users',
  }
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading...</div>;
    return children
  }

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                 <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
