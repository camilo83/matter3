import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import './aliances.scss';
import AliancesLogos from '../aliancesLogos/aliancesLogos';

export default function Aliances() {
  const { language } = useSelector((state: RootState) => state.languageState);

  return (
    <div className="aliances-section">
      <div>
        <h2>{language === 'english' ? 'ALLIANCES' : 'ALIANZAS'}</h2>
      </div>
      <div className="aliances-container">
        <AliancesLogos></AliancesLogos>
      </div>
    </div>
  );
}
