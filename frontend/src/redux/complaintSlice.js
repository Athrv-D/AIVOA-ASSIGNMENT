import { createSlice } from "@reduxjs/toolkit";

const complaintSlice = createSlice({
    name:"complaint",
    initialState:{
        data:null,
        loading:false,
        error:null,
    },
    reducers:{
        setLoading(state,action){
            state.loading= action.payload;
        },
        setComplaint(state,action){
            state.data = action.payload;
            state.loading = false;
            state.error = null;

        },
        setError(state,action){
            state.error = action.payload;
            state.loading = false;
        },
    },
})

export const {setLoading, setComplaint, setError} = complaintSlice.actions;

export default complaintSlice.reducer;