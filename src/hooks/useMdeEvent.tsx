import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { RepoMdeEvents } from '../api/mdeEvent';
import { setMdeEventsState } from '../redux/mdeEventsSlice';

export function useMdeEvents() {
  const repo = useMemo(() => new RepoMdeEvents(), []);
  const dispatch = useDispatch();
  const mdeEvents = useSelector(
    (state: RootState) => state.mdeEventState.mdeEvents
  );

  const loadMdeEvents = useCallback(async () => {
    try {
      const mdeEvents = await repo.getMdeEvents();
      dispatch(setMdeEventsState(mdeEvents));
      return mdeEvents;
    } catch (error) {
      console.error('Failed to load mdeEvents', error);
      return [];
    }
  }, [repo]);

  return {
    mdeEvents,
    loadMdeEvents,
  };
}
