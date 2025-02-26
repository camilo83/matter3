import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { CustomButton } from '../../shared/button/button';
import './homeIntro.scss';
import { Fade } from 'react-awesome-reveal';

export function HomeIntro() {
  const navigate = useNavigate();
  const { language } = useSelector((state: RootState) => state.languageState);

  return (
    <div className="home-intro">
      <div className="home-intro-info">
        <div className="home-intro-title">
          <Fade direction="left">
            <h1>
              {language === 'english'
                ? 'Welcome to Matter 3 Colombia'
                : 'Bienvenido a Matter 3 Colombia'}
            </h1>
          </Fade>
        </div>
        <div className="home-intro-description">
          <div className="home-intro-text">
            <Fade direction="left">
              <p>
                {language === 'english'
                  ? 'Explore the future of art and cultural heritage in the digital age. Matter 3 Colombia is an innovative project that connects cultural narratives with advanced technology through hybrid exhibitions, workshops, and collaborative events. One of its central proposals is '
                  : 'Explora el futuro del arte y el patrimonio cultural en la era digital. Matter 3 Colombia es un proyecto innovador que conecta narrativas culturales con tecnología avanzada a través de exposiciones híbridas, talleres y eventos colaborativos. Una de sus propuestas centrales es '}
                <span className="strong">
                  {language === 'english'
                    ? '"Evoking the Ghosts of Modernity",'
                    : '"Evocando los fantasmas de la Modernidad",'}
                </span>{' '}
                {language === 'english'
                  ? 'a reinterpretation of the prestigious European project Beyond Matter, led by the ZKM | Center for Art and Media (Germany) and the Centre Pompidou (France), adapted to the local context in Medellín.'
                  : 'una reinterpretación del prestigioso proyecto europeo Beyond Matter, liderado por el ZKM | Center for Art and Media (Alemania) y el Centre Pompidou (Francia), y adaptado al contexto local en Medellín.'}
              </p>
            </Fade>
          </div>
          <div className="home-intro-button">
            <Fade direction="right" delay={200}>
              <p>
                {language === 'english'
                  ? 'Join us on this journey where cultural heritage and technology converge, transforming how we experience art and culture. Through interactive exhibitions, participatory workshops, and activities that foster dialogue between local and international communities, Matter 3 Colombia reimagines the future of cultural heritage and its impact on contemporary society.'
                  : 'Únete a nosotros en este viaje donde el patrimonio cultural y la tecnología convergen, transformando la forma en que experimentamos el arte y la cultura. A través de exposiciones interactivas, talleres participativos y actividades que promueven el diálogo entre comunidades locales e internacionales, Matter 3 Colombia reimagina el futuro del patrimonio cultural y su impacto en la sociedad contemporánea.'}
              </p>
              <div
                onClick={() => navigate('/mde')}
                className="button-container"
              >
                <CustomButton
                  title={language === 'english' ? 'SEE MDE' : 'VER MDE'}
                  color="#1c1c1c"
                  backgroundColor="#ffffff"
                ></CustomButton>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
