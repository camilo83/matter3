import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import './homeEvents.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EventsList } from '../../shared/eventsList/eventsList';

type Propstype = {
  events: any[];
  loading?: boolean;
};

gsap.registerPlugin(ScrollTrigger);

export function HomeEvents({ events, loading }: Propstype) {
  const { language } = useSelector((state: RootState) => state.languageState);
  const eventsContainer = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const eventsListContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth > 650) {
      if (eventsListContainerRef.current && titleRef.current) {
        ScrollTrigger.create({
          trigger: eventsContainer.current,
          start: 'top top+=18%',
          end: 'bottom top+=50%',
          pin: titleRef.current,
          pinSpacing: false,
          onEnter: () =>
            gsap.set(titleRef.current, { clearProps: 'transform' }),
        });
        return () =>
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    }
  }, [loading]);

  return (
    <div className="events-container" ref={eventsContainer}>
      <div ref={titleRef} className="home_events_title">
        <h2>{language === 'english' ? 'EVENTS' : 'EVENTOS'}</h2>
        <p>
          {language === 'english'
            ? 'Matter 3 Colombia invites you to participate in a series of events designed to connect technology, art, and cultural heritage. With interactive exhibitions, workshops, and reflection spaces, each activity is an opportunity to discover new ways of experiencing art in the digital age.'
            : 'Matter 3 Colombia te invita a participar en una serie de eventos diseñados para conectar la tecnología, el arte y el patrimonio cultural. Con exposiciones interactivas, talleres y espacios de reflexión, cada actividad es una oportunidad para descubrir nuevas formas de experimentar el arte en la era digital.'}
        </p>
        <p className="invitation">
          {language === 'english'
            ? 'All events, except for the exhibition at MAMM, are free! (Schedule your visit)'
            : '¡Todos los eventos, excepto la exposición en el MAMM, son gratuitos! (Agenda tu visita)'}
        </p>
      </div>

      <div ref={eventsListContainerRef} className="home_events_list_container">
        <EventsList events={events}></EventsList>
      </div>
    </div>
  );
}
