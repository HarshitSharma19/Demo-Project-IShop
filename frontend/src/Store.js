import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux/Reducers/CounterReducer';

const AppStore = configureStore({
    reducer : {counterReducer}
})

export {AppStore}; 