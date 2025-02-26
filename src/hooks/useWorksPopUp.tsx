import { useDispatch, useSelector } from 'react-redux';
import {
  setIsPopUpOpen,
  setCurrentWork,
  setSelectedWorkIndex,
  setWorksList,
} from '../redux/worksPopUpSlice';
import { RootState } from '../store/store';
import { Work } from '../model/work';

export function useWorksPopUp() {
  const dispatch = useDispatch();
  const isWorksPopUpOpen = useSelector(
    (state: RootState) => state.worksPopUpState.isPopUpOpen
  );

  const selectedWorkIndex = useSelector(
    (state: RootState) => state.worksPopUpState.selectedWorkIndex
  );

  const currentWork = useSelector(
    (state: RootState) => state.worksPopUpState.currentWork
  );

  const worksList = useSelector(
    (state: RootState) => state.worksPopUpState.worksList
  );

  const handleToggleWorksPopUp = (data: boolean) => {
    dispatch(setIsPopUpOpen(data));
  };

  const handleSetSelectedWorkIndex = (data: number | null) => {
    dispatch(setSelectedWorkIndex(data));
  };

  const handleCurrentWork = (data: Work | null) => {
    dispatch(setCurrentWork(data));
  };

  const handleWorksList = (data: Work[]) => {
    dispatch(setWorksList(data));
  };

  return {
    isWorksPopUpOpen,
    handleToggleWorksPopUp,
    selectedWorkIndex,
    handleSetSelectedWorkIndex,
    currentWork,
    handleCurrentWork,
    worksList,
    handleWorksList,
  };
}
