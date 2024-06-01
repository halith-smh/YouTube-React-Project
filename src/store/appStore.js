import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './slice/gloalSlice';
import popularReducer from './slice/popularVideo';

const appStore = configureStore({
    reducer:{
        global: globalReducer,
        popularVideos: popularReducer
    }
});

export default appStore