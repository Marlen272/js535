import { configureStore } from '@reduxjs/toolkit';
import postSliceReducer from './PostsSlice';

const store = configureStore({
    reducer: {
        postSlice: postSliceReducer,
    },
});

export default store;