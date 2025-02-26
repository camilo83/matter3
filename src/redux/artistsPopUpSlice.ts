import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Artist } from '../model/artist';

interface ArtistsPopUpState {
  isArtistsPopUpOpen: boolean;
  selectedArtistIndex: number | null;
  currentArtist: Artist | null;
}

const initialState: ArtistsPopUpState = {
  isArtistsPopUpOpen: false,
  selectedArtistIndex: null,
  currentArtist: null,
};

const artistsPopUpPopUpSlice = createSlice({
  name: 'artists_pop_up',
  initialState,
  reducers: {
    setIsArtistsPopUpOpen: (state, action: PayloadAction<boolean>) => {
      state.isArtistsPopUpOpen = action.payload;
    },
    setSelectedArtistIndex: (state, action: PayloadAction<number | null>) => {
      state.selectedArtistIndex = action.payload;
    },
    setCurrentArtist: (state, action: PayloadAction<Artist | null>) => {
      state.currentArtist = action.payload;
    },
  },
});

export const {
  setIsArtistsPopUpOpen,
  setSelectedArtistIndex,
  setCurrentArtist,
} = artistsPopUpPopUpSlice.actions;
export default artistsPopUpPopUpSlice.reducer;
