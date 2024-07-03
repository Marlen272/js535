import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://fakestoreapi.com/products';

export const getPosts = createAsyncThunk('getPosts', async () => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to fetch data');
    }
});

export const postsSlice = createSlice({
    name: 'postSlice',
    initialState: {
        post: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        isLoadingOff: (state) => {
            state.isLoading = false;
        },
        isLoadingOn: (state) => {
            state.isLoading = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.post = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { isLoadingOff, isLoadingOn } = postsSlice.actions;
export default postsSlice.reducer;