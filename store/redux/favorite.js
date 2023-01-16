import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favSlice',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavoriteReducer: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavoriteReducer: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoriteSlice.actions.addFavoriteReducer;
export const removeFavorite = favoriteSlice.actions.removeFavoriteReducer;

export default favoriteSlice.reducer;
