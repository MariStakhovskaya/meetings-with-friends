import styles from './EventsListButtons.module.css';

type EventsListButtonType = {
  title: string;
  button: string;
  color: boolean;
};

function EventsListButtons({ title, button, color }: EventsListButtonType) {
  return (
    <div className={`${styles.card} ${color ? `${styles.card_orange}` : `${styles.card_yellow}`}`}>
      <div className={styles.card_text}>
        <h3>{title}</h3>
        <button>{button}</button>
      </div>
    </div>
  );
}

export default EventsListButtons;
