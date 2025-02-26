import { useState } from 'react';
import { CustomButton } from '../../shared/button/button';
import './homeWorks.scss';
import { Work, WorkType } from '../../../model/work';
import { useWorksPopUp } from '../../../hooks/useWorksPopUp';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

type Propstype = {
  works: WorkType[];
};

export function HomeWorks({ works }: Propstype) {
  const { language } = useSelector((state: RootState) => state.languageState);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { handleCurrentWork, handleToggleWorksPopUp } = useWorksPopUp();

  const openWorkPopUp = (work: WorkType) => {
    const workType: Work = {
      is_outstanding: work.acf.is_outstanding,
      id: work.id,
      work_main_image: work.acf.work_main_image,
      work_title: work.acf.work_title,
      work_description: work.acf.work_description,
      work_image_1: work.acf.work_image_1,
      work_image_2: work.acf.work_image_2,
      work_image_3: work.acf.work_image_3,
      work_image_4: work.acf.work_image_4,
      work_image_5: work.acf.work_image_5,
      work_image_6: work.acf.work_image_6,
      work_image_7: work.acf.work_image_7,
      work_image_8: work.acf.work_image_8,
      work_image_9: work.acf.work_image_9,
      work_image_10: work.acf.work_image_10,
      related_artists: work.acf.related_artists,
      work_title_eng: work.acf.work_title_eng,
      work_description_eng: work.acf.work_description_eng,
      type: work.acf.type,
    };
    handleCurrentWork(workType);
    handleToggleWorksPopUp(true);
  };

  const handleClick = (index: number, work: WorkType) => {
    const isMobile = window.innerWidth <= 650;

    if (isMobile) {
      if (clickedIndex === index) {
        openWorkPopUp(work);
        setClickedIndex(null);
      } else {
        setClickedIndex(index);
        setActiveIndex(index);
      }
    } else {
      openWorkPopUp(work);
    }
  };

  return (
    <div className="works">
      <div className="works-container">
        <h2>{language === 'english' ? 'Works' : 'Obras'}</h2>
        <div onClick={() => navigate('/artistas-y-alianzas')}>
          <CustomButton
            title={language === 'english' ? 'SEE ARTISTS' : 'VER ARTISTAS'}
            color="#1c1c1c"
            backgroundColor="#ffffff"
          />
        </div>
        <ul>
          {works.slice(0, 5).map((work, index) => (
            <li
              key={work.id}
              className={
                activeIndex !== null
                  ? activeIndex === index
                    ? 'active'
                    : 'not-active'
                  : ''
              }
              onMouseEnter={() => toggleActive(index)}
              onMouseLeave={() => toggleActive(index)}
              onClick={() => handleClick(index, work)}
            >
              <img
                src={work.acf.work_main_image || '/work.jpg'}
                alt={work.acf.work_title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
