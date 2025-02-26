import { useEffect } from 'react';
import { useWorksPopUp } from '../../../hooks/useWorksPopUp';
import { Router } from '../router/router';
import { useArtistsPopUp } from '../../../hooks/useArtistsPopUp';
import { ArtistPopUp } from '../../artists/artistPopUp/artistPopUp';
import { useArtists } from '../../../hooks/useArtists';
import './app.scss';
import { WorksPopUp } from '../../event/eventWorks/workPopUp/workPopUp';
import { useMenu } from '../../../hooks/useMenu';

export function App() {
  const {
    isWorksPopUpOpen,
    currentWork,
    handleCurrentWork,
    handleSetSelectedWorkIndex,
    handleToggleWorksPopUp,
    selectedWorkIndex,
    worksList,
  } = useWorksPopUp();
  const {
    isArtistsPopUpOpen,
    selectedArtistIndex,
    handleSetSelectedArtistIndex,
    handleToggleArtistsPopUp,
    currentArtist,
    handleCurrentArtist,
  } = useArtistsPopUp();
  const { artists } = useArtists();
  const { isMenuOpen } = useMenu();

  useEffect(() => {
    const elements = [document.documentElement, document.body];
    if (isWorksPopUpOpen || isArtistsPopUpOpen || isMenuOpen) {
      elements.forEach((el) => el.classList.add('no-scroll'));
    } else {
      elements.forEach((el) => el.classList.remove('no-scroll'));
    }

    return () => {
      elements.forEach((el) => el.classList.remove('no-scroll'));
    };
  }, [isWorksPopUpOpen, isArtistsPopUpOpen, isMenuOpen]);

  const closeArtistPopUp = () => {
    handleSetSelectedArtistIndex(null);
    handleToggleArtistsPopUp(false);
    handleCurrentArtist(null);
  };

  const handleNext = () => {
    if (selectedArtistIndex !== null) {
      const nextIndex =
        selectedArtistIndex < artists.length - 1 ? selectedArtistIndex + 1 : 0;
      handleSetSelectedArtistIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (selectedArtistIndex !== null) {
      const previousIndex =
        selectedArtistIndex > 0 ? selectedArtistIndex - 1 : artists.length - 1;
      handleSetSelectedArtistIndex(previousIndex);
    }
  };

  const closeWorksPopUp = () => {
    handleToggleWorksPopUp(false);
    handleSetSelectedWorkIndex(null);
    handleCurrentWork(null);
  };

  const handleNextWork = () => {
    if (selectedWorkIndex !== null) {
      const nextIndex =
        selectedWorkIndex < worksList.length - 1 ? selectedWorkIndex + 1 : 0;
      handleSetSelectedWorkIndex(nextIndex);
    }
  };

  const handlePreviousWork = () => {
    if (selectedWorkIndex !== null) {
      const previousIndex =
        selectedWorkIndex > 0 ? selectedWorkIndex - 1 : worksList.length - 1;
      handleSetSelectedWorkIndex(previousIndex);
    }
  };

  useEffect(() => {
    if (isWorksPopUpOpen === false) {
      handleSetSelectedWorkIndex(null);
      handleCurrentWork(null);
    }
  }, [isWorksPopUpOpen]);

  return (
    <>
      {isWorksPopUpOpen && (selectedWorkIndex !== null || currentWork) && (
        <>
          <div className="overlay" onClick={closeWorksPopUp}></div>
          <WorksPopUp
            work={currentWork ? currentWork : worksList[selectedWorkIndex!]}
            onPrevious={handlePreviousWork}
            onNext={handleNextWork}
            onClose={closeWorksPopUp}
          ></WorksPopUp>
        </>
      )}
      {isArtistsPopUpOpen &&
        (selectedArtistIndex !== null || currentArtist) && (
          <>
            <div
              className="artist-popup-overlay"
              onClick={closeArtistPopUp}
            ></div>
            <div className="artist-pop-up-container">
              <ArtistPopUp
                artist={
                  currentArtist ? currentArtist : artists[selectedArtistIndex!]
                }
                onPrevious={handlePrevious}
                onNext={handleNext}
                onClose={closeArtistPopUp}
              />
            </div>
          </>
        )}
      <div>
        <Router />
      </div>
    </>
  );
}
