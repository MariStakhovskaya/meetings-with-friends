import { useEffect, useState } from 'react';

import styles from './EventsListCard.module.css';

import stub from '../../assets/stub.png';
import icon from '../../assets/iconHeart.png';

type EventsListCardType = {
  title: string;
  img: string;
  checked: boolean;
  data: string;
  sort: string;
  sortCard: string;
};

function EventsListCard({ title, img, checked, data, sort, sortCard }: EventsListCardType) {
  const [classStyle, setClass] = useState('');

  useEffect(() => {
    if (sortCard === 'world') {
      setClass('world');
    }
    if (sortCard === 'events') {
      setClass('event');
    }
    if (sortCard === 'meeting') {
      setClass('meeting');
    }
  }, []);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_img}>
        {checked && <img src={icon} alt="Icon" className={styles.icon} />}
        <img src={img === '' ? stub : img} alt="Event image" className={styles.img} />
      </div>
      <div className={styles.margin}>
        <div className={styles.card_text}>
          <p>{data}</p>
          <p className={classStyle}>{sort}</p>
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default EventsListCard;
