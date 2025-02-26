import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { RepoProductions } from '../api/productions';
import { setProductionsState } from '../redux/productionsSlice';

export function useProductions() {
  const repo = useMemo(() => new RepoProductions(), []);
  const dispatch = useDispatch();
  const productions = useSelector(
    (state: RootState) => state.productionsState.productions
  );

  const loadProductions = useCallback(async () => {
    try {
      const productions = await repo.getProductions();
      dispatch(setProductionsState(productions));
      return productions;
    } catch (error) {
      console.error('Failed to load productions', error);
      return [];
    }
  }, [repo]);

  return {
    productions,
    loadProductions,
  };
}
