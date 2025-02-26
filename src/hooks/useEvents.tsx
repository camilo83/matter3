import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setEventsState } from '../redux/eventsSlice';
import { RepoEvents } from '../api/event';

export function useEvents() {
  const repo = useMemo(() => new RepoEvents(), []);
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.eventsState.events);

  const loadEvents = useCallback(async () => {
    try {
      const events = await repo.getEvents();
      const sortedEvents = [...events].sort(
        (a, b) => a.acf.order - b.acf.order
      );
      dispatch(setEventsState(sortedEvents));
      return events;
    } catch (error) {
      console.error('Failed to load events', error);
      return [];
    }
  }, [repo]);

  const loadEvent = useCallback(
    async (slug: string) => {
      try {
        const events = await repo.getEvent(slug);
        return events;
      } catch (error) {
        console.error('Failed to load event', error);
        return;
      }
    },
    [repo]
  );

  return {
    events,
    loadEvents,
    loadEvent,
  };
}
