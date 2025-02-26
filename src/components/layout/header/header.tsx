import { Menu } from '../Menu/Menu';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../../../hooks/useMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export function Header() {
  const { language } = useSelector((state: RootState) => state.languageState);
  const navigate = useNavigate();
  const { handleToggleMenu, isMenuOpen } = useMenu();

  const openCloseMenu = () => handleToggleMenu(!isMenuOpen);

  return (
    <>
      {isMenuOpen && <Menu openCloseMenu={openCloseMenu}></Menu>}
      <header>
        <div className="header-container">
          <div className="header">
            <div className="header-mobile">
              <div className="menu-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="32"
                  fill="none"
                  className="logo"
                  onClick={() => navigate('/')}
                >
                  <g clip-path="url(#clip0_13_1603)">
                    <path
                      d="M4.24247 0.147644L9.67333 15.2485L15.0885 0.147644H19.3153V19.849H16.0574V13.3552L16.3804 4.66938L10.821 19.8523H8.4818L2.93492 4.68251L3.25789 13.3552V19.849H0V0.147644H4.24247Z"
                      fill="white"
                    />
                    <path
                      d="M33.7233 15.265H26.4299L24.9029 19.8523H21.5007L28.6154 0.147644H31.5503L38.6744 19.849H35.2597L33.7202 15.2617L33.7233 15.265ZM27.3486 12.502H32.8046L30.0766 4.32812L27.3486 12.502Z"
                      fill="white"
                    />
                    <path
                      d="M52.8599 2.91056H46.9901V19.8523H43.7447V2.91056H37.925V0.147644H52.8599V2.90728V2.91056Z"
                      fill="white"
                    />
                    <path
                      d="M69.1399 2.91056H63.2701V19.8523H60.0248V2.91056H54.2051V0.147644H69.1399V2.90728V2.91056Z"
                      fill="white"
                    />
                    <path
                      d="M82.6137 11.0549H74.8813V17.1157H83.9212V19.849H71.6108V0.147644H83.8303V2.90728H74.8813V8.34781H82.6137V11.0549Z"
                      fill="white"
                    />
                    <path
                      d="M93.5004 12.2723H89.8537V19.849H86.5833V0.147644H93.2025C95.3755 0.147644 97.0499 0.656258 98.232 1.67677C99.4141 2.69727 100.004 4.17389 100.004 6.10663C100.004 7.42574 99.6995 8.52828 99.0912 9.41754C98.4829 10.3068 97.6362 10.9893 96.5513 11.4684L100.778 19.6718V19.849H97.2725L93.4972 12.2723H93.5004ZM89.8537 9.5127H93.215C94.3188 9.5127 95.1811 9.22065 95.8019 8.63985C96.4228 8.05905 96.7332 7.26167 96.7332 6.25101C96.7332 5.24034 96.4479 4.38062 95.874 3.8031C95.3002 3.22558 94.4442 2.92697 93.306 2.91056H89.8537V9.5127Z"
                      fill="white"
                    />
                    <path
                      d="M104.66 4.51844H105.707C106.845 4.51844 107.413 4.08202 107.413 3.20589C107.413 2.89088 107.297 2.61196 107.065 2.37242C106.833 2.13288 106.45 2.01475 105.914 2.01475C105.5 2.01475 105.152 2.10335 104.873 2.27726C104.594 2.45117 104.453 2.70056 104.453 3.01557H102.048C102.048 2.12304 102.402 1.39785 103.114 0.836737C103.826 0.278903 104.741 -0.0032959 105.861 -0.0032959C107.093 -0.0032959 108.062 0.269058 108.764 0.817049C109.467 1.36176 109.818 2.10991 109.818 3.05495C109.818 4.12796 109.235 4.8958 108.071 5.35519C109.357 5.72599 109.997 6.54962 109.997 7.83264C109.997 8.78752 109.614 9.55208 108.852 10.1198C108.09 10.6874 107.09 10.9729 105.858 10.9729C104.694 10.9729 103.744 10.6874 103.008 10.1132C102.271 9.53895 101.901 8.74486 101.901 7.72435H104.306C104.306 8.06561 104.453 8.35766 104.751 8.5972C105.049 8.83674 105.456 8.95487 105.974 8.95487C106.516 8.95487 106.921 8.83017 107.184 8.58407C107.448 8.33469 107.579 8.02296 107.579 7.64232C107.579 6.73009 107.002 6.2707 105.845 6.26086H104.657V4.51516L104.66 4.51844Z"
                      fill="white"
                    />
                    <path
                      d="M2.97875 29.1714H0.354248V28.1476H2.97875V29.1714Z"
                      fill="white"
                    />
                    <path
                      d="M15.4834 29.4175C15.4113 30.2313 15.1228 30.8646 14.6243 31.3175C14.1257 31.7736 13.461 32 12.63 32C12.0499 32 11.5388 31.8556 11.0967 31.5701C10.6546 31.2846 10.316 30.8745 10.0745 30.3429C9.83307 29.8113 9.71078 29.1977 9.69824 28.4955V27.7834C9.69824 27.0648 9.82053 26.4315 10.062 25.8835C10.3065 25.3355 10.6546 24.9155 11.1093 24.6169C11.5639 24.3216 12.0907 24.1739 12.6865 24.1739C13.4892 24.1739 14.1351 24.4003 14.6243 24.8564C15.1134 25.3125 15.3988 25.9557 15.4772 26.7891H14.2166C14.1571 26.2412 14.0034 25.8474 13.7588 25.6046C13.5143 25.3617 13.1537 25.2403 12.6833 25.2403C12.1346 25.2403 11.7113 25.4503 11.4166 25.8704C11.1218 26.2904 10.9713 26.9073 10.965 27.7211V28.397C10.965 29.2206 11.1061 29.8474 11.3883 30.2805C11.6705 30.7137 12.0813 30.9302 12.6269 30.9302C13.1223 30.9302 13.4955 30.8121 13.7463 30.5791C13.9972 30.3462 14.1539 29.9557 14.2198 29.4143H15.4803L15.4834 29.4175Z"
                      fill="white"
                    />
                    <path
                      d="M28.2548 28.2887C28.2548 29.0336 28.1325 29.6899 27.8848 30.251C27.6371 30.8154 27.2859 31.2453 26.8281 31.5471C26.3703 31.849 25.8435 32 25.2477 32C24.652 32 24.1315 31.849 23.6705 31.5471C23.2096 31.2453 22.8521 30.8154 22.6013 30.2576C22.3504 29.6997 22.2219 29.0566 22.2188 28.3281V27.8983C22.2188 27.1567 22.3442 26.5004 22.595 25.9327C22.8459 25.365 23.2002 24.9286 23.658 24.6267C24.1158 24.3248 24.6426 24.1739 25.2352 24.1739C25.8278 24.1739 26.3546 24.3216 26.8124 24.6202C27.2702 24.9188 27.6245 25.3486 27.8754 25.9065C28.1262 26.4676 28.2516 27.1173 28.2548 27.8589V28.2822V28.2887ZM26.9911 27.8917C26.9911 27.0484 26.8375 26.4019 26.5333 25.9524C26.2292 25.5028 25.7965 25.2764 25.2352 25.2764C24.6739 25.2764 24.26 25.4996 23.9527 25.9491C23.6454 26.3987 23.4855 27.032 23.4793 27.849V28.2887C23.4793 29.1255 23.636 29.7719 23.9465 30.228C24.2569 30.6841 24.6896 30.9138 25.2446 30.9138C25.7996 30.9138 26.2355 30.6907 26.5365 30.2444C26.8375 29.7982 26.988 29.1452 26.988 28.2887V27.8917H26.9911Z"
                      fill="white"
                    />
                    <path
                      d="M36.6113 30.8416H39.9131V31.8982H35.3445V24.2822H36.6081V30.8416H36.6113Z"
                      fill="white"
                    />
                    <path
                      d="M52.2045 28.2887C52.2045 29.0336 52.0822 29.6899 51.8345 30.251C51.5868 30.8154 51.2356 31.2453 50.7778 31.5471C50.32 31.849 49.7932 32 49.1974 32C48.6017 32 48.0812 31.849 47.6202 31.5471C47.1593 31.2453 46.8018 30.8154 46.551 30.2576C46.3002 29.6997 46.1716 29.0566 46.1685 28.3281V27.8983C46.1685 27.1567 46.2939 26.5004 46.5447 25.9327C46.7956 25.365 47.1499 24.9286 47.6077 24.6267C48.0655 24.3248 48.5923 24.1739 49.1849 24.1739C49.7775 24.1739 50.3043 24.3216 50.7621 24.6202C51.2199 24.9188 51.5742 25.3486 51.8251 25.9065C52.0759 26.4676 52.2014 27.1173 52.2045 27.8589V28.2822V28.2887ZM50.9408 27.8917C50.9408 27.0484 50.7872 26.4019 50.483 25.9524C50.1789 25.5028 49.7462 25.2764 49.1849 25.2764C48.6236 25.2764 48.2097 25.4996 47.9024 25.9491C47.5952 26.3987 47.4352 27.032 47.429 27.849V28.2887C47.429 29.1255 47.5857 29.7719 47.8962 30.228C48.2066 30.6841 48.6393 30.9138 49.1943 30.9138C49.7493 30.9138 50.1852 30.6907 50.4862 30.2444C50.7872 29.7982 50.9377 29.1452 50.9377 28.2887V27.8917H50.9408Z"
                      fill="white"
                    />
                    <path
                      d="M60.9373 24.2822L63.035 30.1197L65.1296 24.2822H66.7632V31.8982H65.5027V29.388L65.6281 26.0311L63.4803 31.8982H62.5772L60.4324 26.0344L60.5579 29.388V31.8982H59.2974V24.2822H60.9373Z"
                      fill="white"
                    />
                    <path
                      d="M74.0911 31.8982V24.2822H76.5839C77.4054 24.2822 78.0325 24.4561 78.4621 24.8006C78.8917 25.1452 79.108 25.6603 79.108 26.3429C79.108 26.6907 79.0171 27.0057 78.8384 27.2846C78.6596 27.5635 78.3962 27.7801 78.0482 27.9343C78.4401 28.0459 78.7443 28.2559 78.9607 28.5644C79.177 28.8728 79.2836 29.2436 79.2836 29.6768C79.2836 30.3921 79.0641 30.9401 78.6251 31.324C78.1862 31.7079 77.559 31.8982 76.7438 31.8982H74.0911ZM75.3578 27.4881H76.5964C76.9884 27.4881 77.2957 27.3962 77.5183 27.2092C77.7409 27.0221 77.8507 26.7596 77.8507 26.4183C77.8507 26.041 77.7472 25.7686 77.5434 25.6013C77.3395 25.4339 77.0197 25.3486 76.587 25.3486H75.3578V27.4881ZM75.3578 28.4594V30.8384H76.7626C77.1577 30.8384 77.4681 30.7366 77.6907 30.5299C77.9134 30.3232 78.0262 30.0377 78.0262 29.6735C78.0262 28.8827 77.6406 28.479 76.8661 28.4594H75.3578Z"
                      fill="white"
                    />
                    <path
                      d="M87.7183 31.8982H86.4578V24.2822H87.7183V31.8982Z"
                      fill="white"
                    />
                    <path
                      d="M99.179 30.123H96.3601L95.7706 31.8949H94.4568L97.2067 24.2789H98.3418L101.095 31.8949H99.7748L99.179 30.123ZM96.7144 29.0566H98.8247L97.7711 25.8966L96.7176 29.0566H96.7144Z"
                      fill="white"
                    />
                    <path
                      d="M109.99 29.1714H107.366V28.1476H109.99V29.1714Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_1603">
                      <rect width="110" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="menu-icon" onClick={openCloseMenu}>
                  <FontAwesomeIcon icon={faBars} className="icon" />
                  <p>{language === 'english' ? 'MENU' : 'MENÚ'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
