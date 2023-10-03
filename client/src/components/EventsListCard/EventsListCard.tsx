import styles from './EventsListCard.module.css';

type EventsListCardType = {
  title: string;
  button: string;
  color: boolean;
};

function EventsListCard({ title, button, color }: EventsListCardType) {
  return (
    <div className={`${styles.card} ${color ? `${styles.card_orange}` : `${styles.card_yellow}`}`}>
      <div className={styles.card_text}>
        <h3>{title}</h3>
        <button>{button}</button>
      </div>
    </div>
  );
}

export default EventsListCard;
