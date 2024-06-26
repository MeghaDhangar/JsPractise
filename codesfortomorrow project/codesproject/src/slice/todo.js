import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ACTION
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
})

export const todoSlice = createSlice({
    name: 'todo',
    initialState:{
     isLoading: false,
     data:null,
     isError: false,
    },
    extraReducers: (builder)=>{
        // eslint-disable-next-line no-unused-vars
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchTodos.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.data = action.payload;
        })

        builder.addCase(fetchTodos.rejected,(state, action)=>{
            console.log("Error", action.payload);
            state.isLoading=false;
            state.isError = true;
        });
    },
})

export default todoSlice.reducer;