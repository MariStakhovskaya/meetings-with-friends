import Header from '../../components/Header/Header';

import styles from './Home.module.css';
import Meetings from '../../components/Meetings/Meetings';
import Button from '../../common/Button/Button';
import { useMemo } from 'react';

function Home() {
  const root = useMemo(() => document.querySelector(':root') as HTMLDivElement, []);

  const parallaxHandler = (e: React.MouseEvent<HTMLInputElement>): void => {
    const x = (e.clientX - window.innerWidth / 2) / 100;
    const y = (e.clientY - window.innerHeight / 2) / 100;
    root!.style.setProperty('--posX', `${-x}`);
    root!.style.setProperty('--posY', `${-y}`);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.screen1}>
        <div className={styles.parallax_container} onMouseMove={parallaxHandler}>
          <div className={styles.parallax_bg}></div>
          <div className={styles.container_text_parallax}>
            <Header />
          </div>
          <div className={styles.container_text_parallax}>
            <h1 className={styles.headerTitle}>События города для всех и каждого</h1>
            <div className={styles.headerDescription}>
              {' '}
              Давайте вместе проводить время. Давайте организовывать встречи и ходить на
              мероприятия. Давайте создавать свои события.
            </div>
          </div>
          <div className={styles.parallax_women}></div>
          <div className={styles.parallax_cloud_first}></div>
          <div className={styles.parallax_cloud_second}></div>
          <div className={styles.parallax_cloud_third}></div>
        </div>
      </div>
      <div className={styles.screen2}>
        <div className={styles.container}>
          <h2>
            <span className={styles.meeting}>Мероприятия</span>
            <span className={styles.titleCity}> в Касселе</span>
          </h2>
          <Meetings />
        </div>
      </div>
      <div className={styles.screen3}>
        <div className={styles.superMeet}>
          <span>Знаешь крутое мероприятие города? </span>
          <Button title="поделись с другими" />
        </div>
      </div>
      <div className={styles.screen4}>
        <div className={styles.container}>
          <h2>
            <span className={styles.titleCity}>Ближайшие</span>
            <span className={styles.meeting}> встречи</span>
          </h2>
          <Meetings />
        </div>
      </div>
      <div className={styles.screen5}>
        <div className={styles.myMeet}>
          <span>Хочешь организовать встречу друзей? </span>
          <Button title="действуй" />
        </div>
      </div>
      <div className={styles.screen6}>
        <div className={styles.container}>
          <h2>
            <span className={styles.meeting}>Интересные</span>
            <span className={styles.titleCity}> мероприятия</span>{' '}
            <span className={styles.meeting}>мира</span>
          </h2>
          <Meetings />
        </div>
      </div>
    </div>
  );
}

export default Home;
