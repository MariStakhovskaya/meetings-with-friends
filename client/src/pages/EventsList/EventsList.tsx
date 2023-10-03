import EventsListCard from '../../components/EventsListCard/EventsListCard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { eventsListCard } from '../../constants/ui';

import styles from './EventsList.module.css';

function EventsList() {
  return (
    <>
      <Header />
      <div className={styles.eventsList_container}>
        <div className={styles.eventsList_cards}>
        {
          eventsListCard.map((elem) => <EventsListCard title={elem.title} button={elem.button} color={elem.color} />)
        }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EventsList;