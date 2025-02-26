import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Fade } from 'react-awesome-reveal';
import './artists.scss';
import { Artist } from '../../../model/artist';
import { useArtistsPopUp } from '../../../hooks/useArtistsPopUp';

type Propstype = {
  artists: Artist[];
};

export function Artists({ artists }: Propstype) {
  const { handleToggleArtistsPopUp, handleSetSelectedArtistIndex } =
    useArtistsPopUp();
  const { language } = useSelector((state: RootState) => state.languageState);

  const openArtistPopUp = (index: number) => {
    handleSetSelectedArtistIndex(index);
    handleToggleArtistsPopUp(true);
  };

  return (
    <>
      <div>
        <div className="artists-section">
          <h2>{language === 'english' ? 'ARTISTS' : 'ARTISTAS'}</h2>
          <ul>
            {artists.map((artist, index) => (
              <Fade key={index} delay={index * 100} triggerOnce>
                <li onClick={() => openArtistPopUp(index)}>
                  <div>
                    <p>
                      {language === 'english'
                        ? artist.acf.artist_name.toLowerCase() ===
                          'más información'
                          ? 'More information'
                          : artist.acf.artist_name
                        : artist.acf.artist_name}
                    </p>
                  </div>
                </li>
              </Fade>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
