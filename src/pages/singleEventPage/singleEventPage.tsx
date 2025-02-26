import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import { BasicLayout } from '../../components/layout/basicLayout';
import { Separator } from '../../components/shared/separator/separator';
import './singleEventPage.scss';
import { useEvents } from '../../hooks/useEvents';
import { EventType } from '../../model/event';
import { EventWorks } from '../../components/event/eventWorks/eventWorks';
import { EventSocialMedia } from '../../components/event/eventSocialMedia/eventSocialMedia';
import { Fade } from 'react-awesome-reveal';
import { EventSkeleton } from '../../components/skeletons/eventSkeleton/eventSkeleton';
import { useWorksPopUp } from '../../hooks/useWorksPopUp';

export default function SingleEventPage() {
  const { slug } = useParams();
  const { loadEvent } = useEvents();
  const { language } = useSelector((state: RootState) => state.languageState);
  const [event, setEvent] = useState<EventType | null>(null);
  const [eventImages, setEventImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { isWorksPopUpOpen, handleWorksList } = useWorksPopUp();

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      try {
        const loadedEvent = await loadEvent(slug);
        if (!loadedEvent) return;

        const event = loadedEvent[0];

        handleWorksList(event.acf.works);

        setEvent(event);
        const images = [
          event.acf.imagen_1,
          event.acf.imagen_2,
          event.acf.imagen_3,
        ].filter(Boolean);
        await Promise.all(
          images.map(
            (src) =>
              new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.src = src;
              })
          )
        );
        setEventImages(images);
      } catch (error) {
        console.error('Failed to load images:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  const renderDescription = (description: string) => {
    return description
      .split('$')
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  if (loading) {
    return (
      <BasicLayout>
        <Separator height={100}></Separator>
        <EventSkeleton></EventSkeleton>
      </BasicLayout>
    );
  }

  return (
    <BasicLayout>
      <div className={`date ${isWorksPopUpOpen ? 'hidden' : 'visible'}`}>
        <p>{event?.acf.event_year}</p>
      </div>
      <div className="page-container">
        <div className="single_event_page">
          <Separator height={100}></Separator>
          <div className="event_images_container">
            {eventImages.map((image, index) => (
              <Fade
                className="img_fade_class"
                delay={200 * index}
                triggerOnce
                key={index}
              >
                <img src={image} alt="event" className="event_image" />
              </Fade>
            ))}
          </div>
          <Separator height={50}></Separator>
          <div className="event_info">
            <div className="name-date">
              <Fade
                className="fade-class"
                direction="left"
                delay={600}
                triggerOnce
              >
                <h2>
                  {language === 'english'
                    ? event?.acf.name_eng
                    : event?.acf.name}
                </h2>
              </Fade>
            </div>
            <Fade
              className="fade-class"
              direction="right"
              delay={700}
              triggerOnce
            >
              <div className="event_description">
                <div className="description">
                  {renderDescription(
                    language === 'english'
                      ? event?.acf.long_description_eng!
                      : event?.acf.long_description!
                  )}
                </div>
                <p>
                  <span className="strong">
                    {language === 'english' ? 'Inauguration' : 'Inauguración'}
                  </span>
                  : {event?.acf.inauguration}
                </p>
                <p>
                  <span className="strong">
                    {language === 'english' ? 'Duration' : 'Duración'}
                  </span>
                  : {event?.acf.duration}
                </p>
                <p>
                  <span className="strong">
                    {language === 'english' ? 'Location' : 'Ubicación'}
                  </span>
                  : {event?.acf.location}
                </p>
                <a
                  href="https://www.elmamm.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {language === 'english'
                    ? 'Get your tickets here'
                    : 'Consigue tus entradas aquí'}
                </a>
              </div>
            </Fade>
          </div>
          <Separator height={100}></Separator>
          {event?.acf.works && <EventWorks></EventWorks>}
          <Separator height={200}></Separator>
          {event?.acf.social_media_posts && (
            <EventSocialMedia
              posts={event?.acf.social_media_posts}
            ></EventSocialMedia>
          )}
          <Separator height={200}></Separator>
        </div>
      </div>
    </BasicLayout>
  );
}
