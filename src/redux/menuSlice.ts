import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  isMenuOpen: boolean;
}

const initialState: MenuState = {
  isMenuOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { setIsMenuOpen } = menuSlice.actions;
export default menuSlice.reducer;
