import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EventType } from '../model/event';

export type eventsState = {
  events: EventType[];
};

const initialState: eventsState = {
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEventsState: (state, action: PayloadAction<EventType[]>) => {
      state.events = action.payload;
    },
  },
});

export default eventsSlice.reducer;
export const { setEventsState } = eventsSlice.actions;
