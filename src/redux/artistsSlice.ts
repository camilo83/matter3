import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Artist } from '../model/artist';

export type artistsState = {
  artists: Artist[];
};

const initialState: artistsState = {
  artists: [],
};

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    setArtistsState: (state, action: PayloadAction<Artist[]>) => {
      state.artists = action.payload;
    },
  },
});

export default artistsSlice.reducer;
export const { setArtistsState } = artistsSlice.actions;
