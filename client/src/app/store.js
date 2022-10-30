import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import spellbookReducer from '../features/spellbook/spellbookSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    spellbook: spellbookReducer,
  },
});
