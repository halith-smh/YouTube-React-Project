import { createSlice } from "@reduxjs/toolkit";


const globalSlice = createSlice({
    name: 'global',
    initialState: {
        showSideBar: true,
        searchCache: {}
    },
    reducers: {
        changeSideBar: (state) => {
            state.showSideBar = !state.showSideBar;
        },
        clodeSideBar: (state) => {
            state.showSideBar = false;
        },  
        addSearchCache: (state, action) => {
            state.searchCache = Object.assign(state.searchCache, action.payload);
        }
    }
});

export const {changeSideBar, clodeSideBar, addSearchCache} = globalSlice.actions;

export default globalSlice.reducer;