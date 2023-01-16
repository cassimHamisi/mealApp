import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorite';

// creating a store
const store = configureStore({
  reducer: {
    favoriteMealItem: favoriteReducer,
  },
});
export default store;
