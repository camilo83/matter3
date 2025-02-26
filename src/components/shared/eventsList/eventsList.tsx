import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { EventType } from '../../../model/event';
import { CustomButton } from '../button/button';
import './eventsList.scss';

type Propstype = {
  events: EventType[];
};

export function EventsList({ events }: Propstype) {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useSelector((state: RootState) => state.languageState);

  return (
    <ul className="events-list">
      {events.map((event) => (
        <li
          key={event.id}
          onClick={() =>
            navigate(
              `${
                location.pathname.endsWith('/eventos') ? '/eventos' : '/eventos'
              }/${event.slug}`
            )
          }
        >
          <img src={event.acf.main_image} alt="" />
          <div className="name-button">
            <h3>
              {language === 'english' ? event.acf.name_eng : event.acf.name}
            </h3>
          </div>
          <p>
            {language === 'english'
              ? event.acf.description_eng
              : event.acf.description}
          </p>
          <CustomButton
            title={language === 'english' ? 'LEARN MORE' : 'CONOCE MÁS'}
            color="#1c1c1c"
            backgroundColor="#ffffff"
          ></CustomButton>
        </li>
      ))}
    </ul>
  );
}
