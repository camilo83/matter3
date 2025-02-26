import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MdeEvent } from '../model/mdeEvent';

export type mdeEventsState = {
  mdeEvents: MdeEvent[];
};

const initialState: mdeEventsState = {
  mdeEvents: [],
};

const mdeEventsSlice = createSlice({
  name: 'mdeEvents',
  initialState,
  reducers: {
    setMdeEventsState: (state, action: PayloadAction<MdeEvent[]>) => {
      state.mdeEvents = action.payload;
    },
  },
});

export default mdeEventsSlice.reducer;
export const { setMdeEventsState } = mdeEventsSlice.actions;
