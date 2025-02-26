import { useEffect, useState, useRef } from 'react';
import { BeyondMatter } from '../../components/home/beyondMatter/beyondMatter';
import { HomeContactSection } from '../../components/home/homeContactSection/homeContactSection';
import { HomeEvents } from '../../components/home/homeEvents/homeEvents';
import { HomeIntro } from '../../components/home/homeIntro/homeIntro';
import { HomeWorks } from '../../components/home/homeWorks/homeWorks';
import { BasicLayout } from '../../components/layout/basicLayout';
import { Separator } from '../../components/shared/separator/separator';
import './homePage.scss';
import { useEvents } from '../../hooks/useEvents';
import { EventType } from '../../model/event';
import { useWorks } from '../../hooks/useWorks';
import { WorkType } from '../../model/work';
import Animation from '../../components/home/animation/animation';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const { loadEvents, events } = useEvents();
  const { loadWorks, works } = useWorks();
  const [eventsList, setEventsList] = useState<EventType[]>([]);
  const [homeWorksList, setHomeWorksList] = useState<WorkType[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const isScrolling = useRef(false);

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
        if (works.length === 0) {
          const newWorks = await loadWorks();

          const sortedWorks = newWorks.filter(
            (work) => work.acf.is_outstanding
          );
          setHomeWorksList(sortedWorks);
        } else {
          const homeWorks = works.filter((work) => work.acf.is_outstanding);
          setHomeWorksList(homeWorks);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleWheel = (event: WheelEvent) => {
    if (isScrolling.current) return;

    const scrollDirection = event.deltaY > 0 ? 1 : -1;
    const currentSectionIndex = sectionRefs.current.findIndex((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollDirection > 0) {
        return (
          sectionBottom - window.scrollY <= window.innerHeight &&
          sectionBottom - window.scrollY > 0
        );
      }

      if (scrollDirection < 0) {
        return (
          sectionTop - window.scrollY >= 0 &&
          sectionTop - window.scrollY < window.innerHeight
        );
      }

      return false;
    });

    if (
      currentSectionIndex !== -1 &&
      currentSectionIndex + scrollDirection >= 0 &&
      currentSectionIndex + scrollDirection < sectionRefs.current.length
    ) {
      isScrolling.current = true;
      const nextSection =
        sectionRefs.current[currentSectionIndex + scrollDirection];
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth',
      });
      setTimeout(() => {
        isScrolling.current = false;
      }, 10);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <div className="animation_container">
        <Animation></Animation>
      </div>

      <BasicLayout>
        <div className="home-page-container">
          <div className="home-page">
            <div
              className="section separator-section"
              ref={(el) => (sectionRefs.current[0] = el!)}
            >
              <Separator height={window.innerHeight} />
            </div>
            <div
              className="section intro-section"
              ref={(el) => (sectionRefs.current[1] = el!)}
            >
              <HomeIntro />
            </div>
            <div
              className="events-section section"
              style={{ overflowY: 'auto', height: 'max-content' }}
              ref={(el) => (sectionRefs.current[2] = el!)}
            >
              <Separator height={window.innerHeight * 0.12} />
              <div style={{ height: 'max-content' }}>
                <HomeEvents events={eventsList} loading={loading} />
              </div>
              <Separator height={window.innerHeight * 0.12} />
            </div>
            <div
              className="section beyond-matter-section"
              ref={(el) => (sectionRefs.current[3] = el!)}
            >
              <BeyondMatter />
            </div>
            <div
              className="section works-section"
              ref={(el) => (sectionRefs.current[4] = el!)}
            >
              <HomeWorks works={homeWorksList} />
            </div>
            <div
              className="section contact-section"
              ref={(el) => (sectionRefs.current[5] = el!)}
            >
              <HomeContactSection />
            </div>
            <Separator height={300} backgroundColor="#1c1c1c" />
          </div>
        </div>
      </BasicLayout>
    </>
  );
}
