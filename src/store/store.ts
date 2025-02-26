import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import eventsReducer from '../redux/eventsSlice';
import worksReducer from '../redux/worksSlice';
import artistsReducer from '../redux/artistsSlice';
import worksPopUpPopUpReducer from '../redux/worksPopUpSlice';
import artistsPopUpPopUpReducer from '../redux/artistsPopUpSlice';
import menuReducer from '../redux/menuSlice';
import productionsReducer from '../redux/productionsSlice';
import mdeEventReducer from '../redux/mdeEventsSlice';
import languageReducer from '../redux/languageSlice';

export const store = configureStore({
  reducer: {
    eventsState: eventsReducer,
    worksState: worksReducer,
    artistsState: artistsReducer,
    worksPopUpState: worksPopUpPopUpReducer,
    artistsPopUpState: artistsPopUpPopUpReducer,
    menuState: menuReducer,
    productionsState: productionsReducer,
    mdeEventState: mdeEventReducer,
    languageState: languageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
