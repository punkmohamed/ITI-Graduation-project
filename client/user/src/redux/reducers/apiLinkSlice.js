import { createSlice } from "@reduxjs/toolkit";

let apiLinkSlice = createSlice({
    name: 'apiLink',
    initialState: {
        link: 'https://ec2-3-87-140-186.compute-1.amazonaws.com'
    },
    reducers: {
    }
})

export let apiLinkReducer = apiLinkSlice.reducer;
