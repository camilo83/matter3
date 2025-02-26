import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { AliancesSlider } from '../../aliances/aliancesSlider/aliancesSlider';
import { CustomButton } from '../../shared/button/button';
import './footer.scss';

export function Footer() {
  const { language } = useSelector((state: RootState) => state.languageState);

  return (
    <footer>
      <div className="footer-info">
        <AliancesSlider></AliancesSlider>
        <div className="links">
          <CustomButton
            title={
              language === 'english'
                ? 'PRIVACY POLICY'
                : 'POLÍTICA DE PRIVACIDAD'
            }
            color="#ffffff"
            backgroundColor="#1c1c1c"
          ></CustomButton>
          <a
            href="https://instagram.com/MATTER3COLOMBIA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton
              title="INSTAGRAM"
              color="#ffffff"
              backgroundColor="#1c1c1c"
            ></CustomButton>
          </a>
          <a
            href="https://www.youtube.com/c/Matter3Colombia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton
              title="YOUTUBE"
              color="#ffffff"
              backgroundColor="#1c1c1c"
            ></CustomButton>
          </a>
        </div>
      </div>
    </footer>
  );
}
