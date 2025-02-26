import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Work } from '../model/work';

interface WorksPopUpState {
  isPopUpOpen: boolean;
  selectedWorkIndex: number | null;
  currentWork: Work | null;
  worksList: Work[];
}

const initialState: WorksPopUpState = {
  isPopUpOpen: false,
  selectedWorkIndex: null,
  currentWork: null,
  worksList: [],
};

const worksPopUpPopUpSlice = createSlice({
  name: 'works_pop_up',
  initialState,
  reducers: {
    setIsPopUpOpen: (state, action: PayloadAction<boolean>) => {
      state.isPopUpOpen = action.payload;
    },
    setSelectedWorkIndex: (state, action: PayloadAction<number | null>) => {
      state.selectedWorkIndex = action.payload;
    },
    setCurrentWork: (state, action: PayloadAction<Work | null>) => {
      state.currentWork = action.payload;
    },
    setWorksList: (state, action: PayloadAction<Work[]>) => {
      state.worksList = action.payload;
    },
  },
});

export const {
  setIsPopUpOpen,
  setCurrentWork,
  setSelectedWorkIndex,
  setWorksList,
} = worksPopUpPopUpSlice.actions;
export default worksPopUpPopUpSlice.reducer;
