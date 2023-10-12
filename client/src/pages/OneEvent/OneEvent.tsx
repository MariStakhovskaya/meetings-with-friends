import ArrowBack from '../../components/ArrowBack/ArrowBack';

import styles from './OneEvent.module.css';

import iconHeart from '../../assets/Heart.svg';
import arrowOther from '../../assets/ArrowOther.png';
import { comments, eventsListCards } from '../../constants/ui';
import EventComment from '../../components/EventComment/EventComment';
import EventsListCard from '../../components/EventsListCard/EventsListCard';


function OneEvent() {
  const otherEvents = eventsListCards.slice(0, 4);
  return (
    <div className={styles.event_container}>
      <ArrowBack title="Выставка художников импрессионистов " />
      <ul className={styles.chgk}>
        <li className={styles.chgk_active}>мероприятие / выставка</li>
        <li>
          <span>когда:</span>
          <p>23 сентября</p>
        </li>
        <li>
          <span>начало:</span>
          <p>10.00 утра</p>
        </li>
        <li>
          <span>где:</span>
          <p>главная площадь, г. Кассель</p>
        </li>
      </ul>
      <div className={styles.event_content}>
        <div className={styles.event_text}>
          <div className={styles.text_container}>
            <div className={styles.block_event}>
              <h4>смотря какой текст здесь, если нужен подзаголовок, или важная инфа</h4>
              <p>
                Какой-то текст. Неизвестно сколько здесь будет символов и абзацев. И вообще важно
                здесь только что, где и когда, и хештеги. Какое-то небольшое описание. Зайдя сюда
                пользователь увидит новость и захочет или не захочет пойти. И должен увидеть кнопку.
                Или возможно здесь же пометку о том, что “вы идёте, не переживайте, у вас в кабинете
                это есть” Куда запихнуть картинку? Справа? несколько картинок справа? они будут? Что
                еще добавить? Кто тексты писать будет? и о чем? Маша, для чего эта страница? Ответь
                мне, Маашаа
              </p>
              <button>
                <img className={styles.button_icon} src={iconHeart} alt="Icon Heart" />
                хочу посетить
              </button>
            </div>
          </div>
          <div className={styles.text_container}>
            <div className={styles.block_comment}>
              {comments.map((elem, id) => {
                return <EventComment key={`${elem}_${id}`} name={elem.name} date={elem.date} comment={elem.comment} />;
              })}
            </div>
            <div className={styles.add_comment}>
              <input type="text" placeholder="Написать комментарий" />
            </div>
          </div>
        </div>
        <div className={styles.event_images}>
          <div className={`${styles.image_container} ${styles.image_position1}`}>
            <img
              src="https://mirmainecoon.ru/wp-content/uploads/2017/05/13737000_498986926959083_64457484_n-e1494667011118.jpg"
              className={styles.rotate1}
              alt="Event picture"
            />
          </div>
          <div className={`${styles.image_container} ${styles.image_position2}`}>
            <img
              src="https://mirmainecoon.ru/wp-content/uploads/2017/05/13737000_498986926959083_64457484_n-e1494667011118.jpg"
              className={styles.rotate2}
              alt="Event picture"
            />
          </div>
          <div className={`${styles.image_container} ${styles.image_position3}`}>
            <img
              src="https://mirmainecoon.ru/wp-content/uploads/2017/05/13737000_498986926959083_64457484_n-e1494667011118.jpg"
              className={styles.rotate3}
              alt="Event picture"
            />
          </div>
        </div>
      </div>
      <div className={styles.other}>
        <div className={styles.other_header}>
          <h2>
            Похожие <span>мероприятия</span>
          </h2>
          <div>
            <img src={arrowOther} alt="Orange arrow" />
          </div>
        </div>
        <div className={styles.other_content}>
          {
            otherEvents.map((elem, id) => {
              return <EventsListCard key={id} title={elem.title} img={elem.img} checked={elem.checked} data={elem.data} sort={elem.sort} sortCard={elem.sort2} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default OneEvent;
