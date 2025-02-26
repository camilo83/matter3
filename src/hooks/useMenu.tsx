import { useDispatch, useSelector } from 'react-redux';
import { setIsMenuOpen } from '../redux/menuSlice';
import { RootState } from '../store/store';

export function useMenu() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(
    (state: RootState) => state.menuState.isMenuOpen
  );

  const handleToggleMenu = (data: boolean) => {
    dispatch(setIsMenuOpen(data));
  };

  return {
    isMenuOpen,
    handleToggleMenu,
  };
}
