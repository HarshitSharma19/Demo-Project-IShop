import Reducer1 from './Reducers/Reducer1';
import Reducer2 from './Reducers/Reducer2';
import { configureStore } from '@reduxjs/toolkit';
const MyStore = configureStore({
    reducer: {Reducer1 , Reducer2}
})
export default MyStore;