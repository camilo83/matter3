import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Artist } from '../../../model/artist';
import { CustomButton } from '../../shared/button/button';
import './artistPopUp.scss';
import { useArtists } from '../../../hooks/useArtists';
import { useArtistsPopUp } from '../../../hooks/useArtistsPopUp';

type PropsType = {
  artist: Artist;
  onPrevious?: () => void;
  onNext?: () => void;
  onClose?: () => void;
};

export function ArtistPopUp({
  artist,
  onPrevious,
  onNext,
  onClose,
}: PropsType) {
  const { language } = useSelector((state: RootState) => state.languageState);
  const [worksImages, setWorksImages] = useState<string[]>([]);
  const { artists } = useArtists();
  const { selectedArtistIndex } = useArtistsPopUp();

  useEffect(() => {
    const worksImages = Object.entries(artist.acf)
      .filter(([key]) => key.startsWith('artist_work_image_'))
      .map(([, value]) => value)
      .filter(Boolean);

    setWorksImages(worksImages as string[]);
  }, [artist]);

  const renderDescription = (description: string) => {
    return description
      .split('$')
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <>
      <div className="artist-pop-up-info">
        <img
          src={artist.acf.main_artist_image || '/artist.jpg'}
          alt={
            language === 'english'
              ? artist.acf.artist_name
              : artist.acf.artist_name
          }
        />
        <div className="info-container">
          <div className="buttons-section">
            {artists.length > 1 && selectedArtistIndex !== null && (
              <div onClick={onPrevious}>
                <CustomButton
                  title={language === 'english' ? 'PREVIOUS' : 'ANTERIOR'}
                  color="#ffffff"
                  backgroundColor="#1c1c1c"
                ></CustomButton>
              </div>
            )}
            {artists.length > 1 && selectedArtistIndex !== null && (
              <div onClick={onNext}>
                <CustomButton
                  title={language === 'english' ? 'NEXT' : 'SIGUIENTE'}
                  color="#ffffff"
                  backgroundColor="#1c1c1c"
                ></CustomButton>
              </div>
            )}
            <div onClick={onClose}>
              <CustomButton
                title={language === 'english' ? 'EXIT' : 'SALIR'}
                color="#ffffff"
                backgroundColor="#1c1c1c"
              ></CustomButton>
            </div>
          </div>
          <div className="scrolleable-info">
            {artist.acf.artist_name && <h2>{artist.acf.artist_name}</h2>}
            {artist.acf.artist_description && (
              <div className="description">
                {renderDescription(
                  language === 'english'
                    ? artist.acf.artist_description_eng
                    : artist.acf.artist_description
                )}
              </div>
            )}
            {worksImages.length > 0 && (
              <ul>
                {worksImages.map((work: string, index: number) => (
                  <li key={index}>
                    <img src={work} alt="Work" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
