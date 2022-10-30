import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAll } from './spellbookAPI';

const initialState = {
    status: 'idle',
    spells: []
};

export const fetchAllAsync = createAsyncThunk(
    'spellbook/fetchAll',
    async () => {
      const response = await fetchAll();
      // The value we return becomes the `fulfilled` action payload
      return response.spell || [];
    }
);

export const spellbookSlice = createSlice({
    name: 'spellbook',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAllAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchAllAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.spells = action.payload;
          });
      },
});

export const { test } = spellbookSlice.actions;

export const getSpells = (state) => state.spellbook.spells;

export default spellbookSlice.reducer;
