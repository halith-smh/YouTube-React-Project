import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './slice/gloalSlice';
import popularReducer from './slice/popularVideo';
import livechatReducer from './slice/livechatSlice';

const appStore = configureStore({
    reducer:{
        global: globalReducer,
        popularVideos: popularReducer,
        livechat: livechatReducer
    }
});

export default appStore