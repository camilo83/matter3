import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ContactForm from './contactForm/contactForm';
import './homeContactSection.scss';

export function HomeContactSection() {
  const { language } = useSelector((state: RootState) => state.languageState);

  return (
    <div className="contact">
      <div className="contact-container">
        <h3>{language === 'english' ? 'INQUIRIES' : 'CONSULTAS'}</h3>
        <div className="details-form">
          <div className="details">
            <div className="detail">
              <h3>E-MAIL</h3>
              <a
                href="mailto:MATTER3COLOMBIA@GMAIL.COM"
                target="_blank"
                rel="noopener noreferrer"
              >
                MATTER3COLOMBIA@GMAIL.COM
              </a>
            </div>
            <div className="detail">
              <h3>INSTAGRAM</h3>
              <a
                href="https://instagram.com/MATTER3COLOMBIA"
                target="_blank"
                rel="noopener noreferrer"
              >
                @MATTER3COLOMBIA
              </a>
            </div>
          </div>

          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}
