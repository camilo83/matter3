import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ScrollToTop } from '../../shared/scrollToTop';

const Home = lazy(() => import('../../../pages/homePage/homePage'));
const MDE = lazy(() => import('../../../pages/mdePage/mdePage'));
const Events = lazy(() => import('../../../pages/eventsPage/eventsPage'));
const Production = lazy(
  () => import('../../../pages/productionPage/productionPage')
);
const ArtAndAliances = lazy(
  () => import('../../../pages/artistsAndAliancesPage/artistsAndAliancesPage')
);
const SingleEvent = lazy(
  () => import('../../../pages/singleEventPage/singleEventPage')
);

export function Router() {
  return (
    <main>
      <Suspense fallback={<div></div>}>
        <ScrollToTop />
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={3000}>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/mde" element={<MDE></MDE>}></Route>
              <Route path="/eventos" element={<Events></Events>}></Route>
              <Route
                path="/eventos/:slug"
                element={<SingleEvent></SingleEvent>}
              ></Route>
              <Route
                path="/produccion"
                element={<Production></Production>}
              ></Route>
              <Route
                path="/artistas-y-alianzas"
                element={<ArtAndAliances></ArtAndAliances>}
              ></Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </main>
  );
}
