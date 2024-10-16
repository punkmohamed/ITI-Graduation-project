import { createSlice } from "@reduxjs/toolkit";

let apiLinkSlice = createSlice({
    name: 'apiLink',
    initialState: {
        link: 'https://iti-graduation-back-end-production.up.railway.app'
    },
    reducers: {
    }
})

export let apiLinkReducer = apiLinkSlice.reducer;
