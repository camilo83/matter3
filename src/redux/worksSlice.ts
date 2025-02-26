import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WorkType } from '../model/work';

export type worksState = {
  works: WorkType[];
};

const initialState: worksState = {
  works: [],
};

const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    setWorksState: (state, action: PayloadAction<WorkType[]>) => {
      state.works = action.payload;
    },
  },
});

export default worksSlice.reducer;
export const { setWorksState } = worksSlice.actions;
