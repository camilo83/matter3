import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Production } from '../model/production';

export type productionsState = {
  productions: Production[];
};

const initialState: productionsState = {
  productions: [],
};

const productionsSlice = createSlice({
  name: 'productions',
  initialState,
  reducers: {
    setProductionsState: (state, action: PayloadAction<Production[]>) => {
      state.productions = action.payload;
    },
  },
});

export default productionsSlice.reducer;
export const { setProductionsState } = productionsSlice.actions;
