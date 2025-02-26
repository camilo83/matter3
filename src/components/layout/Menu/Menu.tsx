import { Fade } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import './Menu.scss';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../shared/button/button';

type Propstype = {
  openCloseMenu: () => void;
};

export function Menu({ openCloseMenu }: Propstype) {
  const navigate = useNavigate();
  const { language } = useSelector((state: RootState) => state.languageState);

  const menuOptions = [
    {
      label: language === 'english' ? 'HOME' : 'INICIO',
      link: '/',
    },
    {
      label: 'MDE',
      link: '/mde',
    },
    {
      label: language === 'english' ? 'EVENTS' : 'EVENTOS',
      link: '/eventos',
    },
    {
      label:
        language === 'english' ? 'ARTISTS & ALLIANCES' : 'ARTISTAS Y ALIANZAS',
      link: '/artistas-y-alianzas',
    },
    {
      label: language === 'english' ? 'PRODUCTION' : 'PRODUCCIÓN',
      link: '/produccion',
    },
  ];

  const handleOtherPage = (link: string) => {
    openCloseMenu();
    navigate(link);
  };

  return (
    <div className="menu">
      <div className="menu-container">
        <ul>
          {menuOptions.map((option, index) => (
            <Fade
              cascade
              triggerOnce
              direction="right"
              delay={index * 100}
              key={index}
            >
              <li onClick={() => handleOtherPage(option.link)}>
                <span
                  className={`menu-item ${
                    location.pathname === option.link ? 'active' : ''
                  }`}
                >
                  {option.label}
                  <span className="line"></span>
                </span>
              </li>
            </Fade>
          ))}
        </ul>
        <Fade delay={500}>
          <div className="buttons-container">
            <a
              href="https://instagram.com/MATTER3COLOMBIA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton
                title="INSTAGRAM"
                color="#17a7c6"
                backgroundColor="#ffffff"
              ></CustomButton>
            </a>
            <a
              href="https://www.youtube.com/c/Matter3Colombia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton
                title="YOUTUBE"
                color="#17a7c6"
                backgroundColor="#ffffff"
              ></CustomButton>
            </a>
          </div>
        </Fade>
      </div>
      <div className="close_button_container" onClick={openCloseMenu}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="34"
            viewBox="0 0 36 34"
            fill="none"
          >
            <line
              x1="2.70711"
              y1="1.29289"
              x2="34.7071"
              y2="33.2929"
              stroke="white"
              strokeWidth="2"
            />
            <line
              y1="-1"
              x2="45.2548"
              y2="-1"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 34 2)"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
