import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setArtistsState } from '../redux/artistsSlice';
import { RepoArtists } from '../api/artists';

export function useArtists() {
  const repo = useMemo(() => new RepoArtists(), []);
  const dispatch = useDispatch();
  const artists = useSelector((state: RootState) => state.artistsState.artists);

  const loadArtists = useCallback(async () => {
    try {
      const artists = await repo.getArtists();
      const sortedArtists = [...artists].sort(
        (a, b) => a.acf.order - b.acf.order
      );
      dispatch(setArtistsState(sortedArtists));
      return artists;
    } catch (error) {
      console.error('Failed to load artist', error);
      return [];
    }
  }, [repo]);

  const loadArtist = useCallback(
    async (id: number) => {
      try {
        const artist = await repo.getArtist(id);
        return artist;
      } catch (error) {
        console.error('Failed to load event', error);
        return;
      }
    },
    [repo]
  );

  return {
    artists,
    loadArtists,
    loadArtist,
  };
}
