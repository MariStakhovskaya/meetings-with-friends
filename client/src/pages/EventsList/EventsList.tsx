import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EventsListButtons from '../../components/EventsListButtons/EventsListButtons';
import EventsListCard from '../../components/EventsListCard/EventsListCard';

import { eventsListButtons, eventsListCards } from '../../constants/ui';

import sorting from '../../assets/sorting-select.png';

import styles from './EventsList.module.css';
import ArrowBack from '../../components/ArrowBack/ArrowBack';

function EventsList() {
  return (
    <>
      <Header />
      <div className={styles.eventsList_container}>
        <ArrowBack title="Список событий" />

        <div className={styles.eventsList_nav}>
          <ul className={styles.eventsList_sorting}>
            <li className={`${styles.sorting_active}`}>все события</li>
            <li className={styles.sorting_events}>мероприятия</li>
            <li className={styles.sorting_meetings}>встречи</li>
            <li className={styles.sorting_world}>в мире</li>
            <li className={styles.sorting_archive}>архив</li>
          </ul>
          <ul className={styles.eventsList_menu}>
            <li>
              <img src={sorting} alt="Sorting active" className={`${styles.nav_sorting_active}`} />
              <p className={styles.nav_active}>все</p>
            </li>
            <li>
              <img
                src={sorting}
                alt="Sorting active"
                className={`${styles.nav_sorting_disabled}`}
              />
              <p>выставка</p>
            </li>
            <li>
              <img
                src={sorting}
                alt="Sorting active"
                className={`${styles.nav_sorting_disabled}`}
              />
              <p>спорт</p>
            </li>
            <li>
              <img
                src={sorting}
                alt="Sorting active"
                className={`${styles.nav_sorting_disabled}`}
              />
              <p>кино</p>
            </li>
            <li>
              <img
                src={sorting}
                alt="Sorting active"
                className={`${styles.nav_sorting_disabled}`}
              />
              <p>детям</p>
            </li>
            <li>
              <img
                src={sorting}
                alt="Sorting active"
                className={`${styles.nav_sorting_disabled}`}
              />
              <p>для всей семьи</p>
            </li>
          </ul>
        </div>

        <div className={styles.position}>
          <div className={styles.eventsList_content}>
            <div className={styles.content}>
              {eventsListCards.map((elem, id) => (
                <EventsListCard
                  key={id}
                  title={elem.title}
                  img={elem.img}
                  checked={elem.checked}
                  data={elem.data}
                  sort={elem.sort}
                  sortCard={elem.sort2}
                />
              ))}
            </div>
            <div className={styles.content_pagination}>
              <p className={styles.pagination_active}>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          </div>

          <div className={styles.eventsList_buttons}>
            {eventsListButtons.map((elem, id) => (
              <EventsListButtons
                key={id}
                title={elem.title}
                button={elem.button}
                color={elem.color}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EventsList;
