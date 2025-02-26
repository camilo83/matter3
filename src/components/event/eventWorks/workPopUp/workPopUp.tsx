import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { useArtists } from '../../../../hooks/useArtists';
import { useArtistsPopUp } from '../../../../hooks/useArtistsPopUp';
import { useWorksPopUp } from '../../../../hooks/useWorksPopUp';
import { Work } from '../../../../model/work';
import { CustomButton } from '../../../shared/button/button';
import './workPopUp.scss';

type PropsType = {
  work: Work;
  onPrevious?: () => void;
  onNext?: () => void;
  onClose?: () => void;
};

export function WorksPopUp({ work, onPrevious, onNext, onClose }: PropsType) {
  const { language } = useSelector((state: RootState) => state.languageState);
  const { loadArtist } = useArtists();
  const { handleToggleArtistsPopUp, handleCurrentArtist } = useArtistsPopUp();
  const { selectedWorkIndex } = useWorksPopUp();

  const openArtistsPopUp = async (id: number) => {
    const artist = await loadArtist(id);
    if (artist) {
      handleCurrentArtist(artist);
      handleToggleArtistsPopUp(true);
    }
  };

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="work-pop-up-container">
        <div className="work-pop-up-info">
          <div className="work-image-container">
            <img
              src={work.work_main_image || '/work.jpg'}
              alt={
                language === 'english' ? work.work_title_eng : work.work_title
              }
            />
          </div>
          <div className="info-container">
            <div className="buttons-section">
              {selectedWorkIndex !== null && (
                <div onClick={onPrevious}>
                  <CustomButton
                    title={language === 'english' ? 'PREVIOUS' : 'ANTERIOR'}
                    color="#ffffff"
                    backgroundColor="#1c1c1c"
                  ></CustomButton>
                </div>
              )}
              {selectedWorkIndex !== null && (
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
              {work.work_title && (
                <h2>
                  {language === 'english'
                    ? work.work_title_eng
                    : work.work_title}
                </h2>
              )}
              {work.work_description && (
                <p>
                  {language === 'english'
                    ? work.work_description_eng
                    : work.work_description}
                </p>
              )}

              <ul className="works-list">
                {work.work_image_1.url && (
                  <li>
                    <img
                      src={work.work_image_1.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
                {work.work_image_2.url && (
                  <li>
                    <img
                      src={work.work_image_2.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
                {work.work_image_3.url && (
                  <li>
                    <img
                      src={work.work_image_3.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
                {work.work_image_4.url && (
                  <li>
                    <img
                      src={work.work_image_4.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
                {work.work_image_5.url && (
                  <li>
                    <img
                      src={work.work_image_5.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
                {work.work_image_6.url && (
                  <li>
                    <img
                      src={work.work_image_6.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
                {work.work_image_7.url && (
                  <li>
                    <img
                      src={work.work_image_7.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
                {work.work_image_8.url && (
                  <li>
                    <img
                      src={work.work_image_8.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
                {work.work_image_9.url && (
                  <li>
                    <img
                      src={work.work_image_9.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
                {work.work_image_10.url && (
                  <li>
                    <img
                      src={work.work_image_10.url}
                      alt={
                        language === 'english'
                          ? work.work_title_eng
                          : work.work_title
                      }
                    />
                  </li>
                )}
              </ul>
              {work.related_artists && (
                <ul className="artist-list">
                  <li>{language === 'english' ? 'Artists:' : 'Artistas :'}</li>
                  {work.related_artists.map((relatedArtist: any) => (
                    <li
                      key={relatedArtist.ID}
                      onClick={() => openArtistsPopUp(relatedArtist.ID)}
                    >
                      {relatedArtist.post_title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
