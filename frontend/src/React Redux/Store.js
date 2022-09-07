import Reducer1 from './Reducers/Reducer1';
import { configureStore } from '@reduxjs/toolkit';
const MyStore = configureStore({
    reducer: {Reducer1}
})
export default MyStore;