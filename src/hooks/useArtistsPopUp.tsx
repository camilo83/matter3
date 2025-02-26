import { useDispatch, useSelector } from 'react-redux';
import {
  setIsArtistsPopUpOpen,
  setSelectedArtistIndex,
  setCurrentArtist,
} from '../redux/artistsPopUpSlice';
import { RootState } from '../store/store';
import { Artist } from '../model/artist';

export function useArtistsPopUp() {
  const dispatch = useDispatch();
  const isArtistsPopUpOpen = useSelector(
    (state: RootState) => state.artistsPopUpState.isArtistsPopUpOpen
  );
  const selectedArtistIndex = useSelector(
    (state: RootState) => state.artistsPopUpState.selectedArtistIndex
  );

  const currentArtist = useSelector(
    (state: RootState) => state.artistsPopUpState.currentArtist
  );

  const handleToggleArtistsPopUp = (data: boolean) => {
    dispatch(setIsArtistsPopUpOpen(data));
  };

  const handleSetSelectedArtistIndex = (data: number | null) => {
    dispatch(setSelectedArtistIndex(data));
  };

  const handleCurrentArtist = (data: Artist | null) => {
    dispatch(setCurrentArtist(data));
  };

  return {
    isArtistsPopUpOpen,
    handleToggleArtistsPopUp,
    selectedArtistIndex,
    handleSetSelectedArtistIndex,
    currentArtist,
    handleCurrentArtist,
  };
}
