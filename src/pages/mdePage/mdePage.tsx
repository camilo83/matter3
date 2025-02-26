import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Fade } from 'react-awesome-reveal';
import Animation from '../../components/home/animation/animation';
import { BasicLayout } from '../../components/layout/basicLayout';
import './mdePage.scss';
import { Separator } from '../../components/shared/separator/separator';
import { MdeVideo } from '../../components/mde/mdeVideo/mdeVideo';
import { HomeContactSection } from '../../components/home/homeContactSection/homeContactSection';
import { useMdeEvents } from '../../hooks/useMdeEvent';
import { MdeEvent } from '../../model/mdeEvent';

export default function MdePage() {
  const { loadMdeEvents, mdeEvents } = useMdeEvents();
  const { language } = useSelector((state: RootState) => state.languageState);
  const [mdeEventsList, setMdeEventsList] = useState<MdeEvent[]>([]);
  const [isHovered, setIsHovered] = useState<Number | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (mdeEvents.length === 0) {
          const newMdeEvents = await loadMdeEvents();
          setMdeEventsList(newMdeEvents);
        } else {
          setMdeEventsList(mdeEvents);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="animation_container">
        <Animation></Animation>
      </div>
      <BasicLayout>
        <div className="page-container">
          <div className="mde_page">
            <div className="page_intro_images">
              <div className="page_intro">
                <div className="black_out"></div>
                <div className="page_intro_info">
                  <h2>MDE</h2>
                  <hr />

                  <div>
                    <Fade direction="left" triggerOnce>
                      <h3>
                        {language === 'english'
                          ? 'Digital Exhibition Model'
                          : 'Modelo Digital de Exhibición'}
                      </h3>
                    </Fade>
                    <Fade direction="right" triggerOnce>
                      <div className="p-container">
                        <p>
                          {language === 'english' ? 'A ' : 'Un '}
                          <span className="strong">
                            {language === 'english'
                              ? 'Digital Exhibition Model (MDE)'
                              : 'Modelo Digital de Exposición (MDE)'}
                          </span>{' '}
                          {language === 'english'
                            ? 'is a three-dimensional computational representation of an exhibition or set of cultural objects, designed to enhance exhibition experiences in digital environments. Unlike a simple digitization of artworks, an MDE integrates spatial, narrative, and technological elements to reshape how audiences interact with cultural heritage.'
                            : 'es una representación computacional tridimensional de una exposición o conjunto de objetos culturales, diseñada para ampliar las experiencias expositivas en entornos digitales. A diferencia de una simple digitalización de obras, un MDE integra elementos espaciales, narrativos y tecnológicos para reconfigurar la manera en que las audiencias interactúan con el patrimonio cultural.'}
                        </p>
                        <p>
                          {language === 'english'
                            ? 'From the Beyond Matter project, developed by '
                            : 'Desde el proyecto Beyond Matter, desarrollado por el '}
                          <span className="strong">
                            ZKM | Center for Art and Media Karlsruhe
                          </span>{' '}
                          {language === 'english' ? 'and the ' : 'y el '}
                          <span className="strong">Centre Pompidou,</span>{' '}
                          {language === 'english'
                            ? 'platforms have been created that do not aim to replicate past exhibitions but to reinterpret them using advanced digital tools. These models function as active archives that allow audiences to experience and reflect on the meaning of heritage in a contemporary context.'
                            : 'se han creado plataformas que no buscan replicar exposiciones del pasado, sino reinterpretarlas a partir de herramientas digitales avanzadas. Así, estos modelos funcionan como archivos activos que permiten experimentar y reflexionar sobre el significado del patrimonio en un contexto contemporáneo.'}
                        </p>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="mde_images_container">
                <ul>
                  {mdeEventsList.map((event: MdeEvent, index: number) => (
                    <Fade direction="up" triggerOnce key={index}>
                      <li
                        onClick={() =>
                          window.open(event.acf.mde_project_link, '_blank')
                        }
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        <img src={event.acf.mde_project_image} alt="event" />
                        <div
                          className={`description ${
                            isHovered === index ? 'active' : ''
                          }`}
                        >
                          <h3>
                            {language === 'english'
                              ? event.acf.mde_project_name_eng
                              : event.acf.mde_project_name}
                          </h3>
                          <p>
                            {language === 'english'
                              ? event.acf.description_eng
                              : event.acf.description}
                          </p>
                        </div>
                      </li>
                    </Fade>
                  ))}
                </ul>
              </div>
              <Separator height={200} backgroundColor="#1c1c1c99"></Separator>
              <MdeVideo></MdeVideo>
              <Separator height={200} backgroundColor="#1c1c1c99"></Separator>
              <div className="mde_contact_section">
                <div className="mde_contact_section_container">
                  <HomeContactSection></HomeContactSection>
                </div>
              </div>
              <Separator height={200} backgroundColor="#1c1c1c99"></Separator>
            </div>
          </div>
        </div>
      </BasicLayout>
    </>
  );
}
