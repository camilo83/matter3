import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type LanguageState = {
  language: 'english' | 'spanish';
};

const initialState: LanguageState = {
  language: 'spanish',
};

const languageSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    changeLanguage: (
      state: LanguageState,
      { payload }: PayloadAction<'english' | 'spanish'>
    ) => {
      state.language = payload;
      return state;
    },
  },
});

export default languageSlice.reducer;
export const { changeLanguage } = languageSlice.actions;
