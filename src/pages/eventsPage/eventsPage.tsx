import { useEffect, useRef, useState } from 'react';
import Animation from '../../components/home/animation/animation';
import { BasicLayout } from '../../components/layout/basicLayout';
import './eventsPage.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EventsList } from '../../components/shared/eventsList/eventsList';
import { Separator } from '../../components/shared/separator/separator';
import { useEvents } from '../../hooks/useEvents';
import { EventType } from '../../model/event';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

gsap.registerPlugin(ScrollTrigger);

export default function EventsPage() {
  const { language } = useSelector((state: RootState) => state.languageState);
  const eventsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [loading, setLoading] = useState(true);
  const { loadEvents, events } = useEvents();
  const [eventsList, setEventsList] = useState<EventType[]>([]);

  useEffect(() => {
    if (window.innerWidth > 650) {
      if (eventsRef.current) {
        ScrollTrigger.create({
          trigger: eventsRef.current,
          start: 'top top+=15%',
          end: 'bottom bottom',
          pin: titleRef.current,
          pinSpacing: false,

          onEnter: () =>
            gsap.set(titleRef.current, {
              clearProps: 'transform',
              height: '10rem',
            }),
        });
        return () =>
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    } else {
      if (eventsRef.current) {
        ScrollTrigger.create({
          trigger: eventsRef.current,
          start: 'top top+=15%',
          end: 'bottom top',
          pin: titleRef.current,
          pinSpacing: false,

          onEnter: () =>
            gsap.set(titleRef.current, {
              clearProps: 'transform',
              height: '40rem',
            }),
        });
        return () =>
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    }
  }, [loading]);

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h2');
    header!.classList.add('animate');
  });

  useEffect(() => {
    (async () => {
      try {
        if (events.length === 0) {
          const newEvents = await loadEvents();
          const sortedEventes = [...newEvents].sort(
            (a, b) => a.acf.order - b.acf.order
          );
          setEventsList(sortedEventes);
        } else {
          setEventsList(events);
        }

        setLoading(false);
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
          <div className="events_page">
            <div className="events_page_info" ref={eventsRef}>
              <h2 ref={titleRef}>
                {language === 'english' ? 'EVENTS' : 'EVENTOS'}
              </h2>

              <div className="events_list_container">
                <Separator height={window.innerHeight * 0.5}></Separator>
                <EventsList events={eventsList}></EventsList>
                <Separator height={200}></Separator>
              </div>
            </div>
          </div>
        </div>
      </BasicLayout>
    </>
  );
}
