import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { RepoWorks } from '../api/works';
import { setWorksState } from '../redux/worksSlice';

export function useWorks() {
  const repo = useMemo(() => new RepoWorks(), []);
  const dispatch = useDispatch();
  const works = useSelector((state: RootState) => state.worksState.works);

  const loadWorks = useCallback(async () => {
    try {
      const works = await repo.getWorks();
      dispatch(setWorksState(works));
      return works;
    } catch (error) {
      console.error('Failed to load works', error);
      return [];
    }
  }, [repo]);

  const loadWork = useCallback(
    async (slug: string) => {
      try {
        const events = await repo.getWork(slug);
        return events;
      } catch (error) {
        console.error('Failed to load event', error);
        return;
      }
    },
    [repo]
  );

  return {
    works,
    loadWorks,
    loadWork,
  };
}
