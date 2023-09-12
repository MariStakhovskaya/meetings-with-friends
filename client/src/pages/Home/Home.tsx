import Header from '../../components/Header/Header';

import styles from './Home.module.css';
import Meetings from '../../components/Meetings/Meetings';
import Button from '../../common/Button/Button';

function Home() {

    return (
        <div className={styles.wrap}>

            <div className={styles.screen1}>
                <div className={styles.container}>
                    <Header />

                    <div className={styles.woman}>

                        <div className={styles.cloud}></div>
                        {/* <div className={styles.cloud1}></div> */}
                    </div>


                    <div className={styles.grass}></div>

                    <h1 className={styles.headerTitle}>События города для всех и каждого</h1>
                    <div className={styles.headerDescription}> Давайте вместе проводить время. Давайте организовывать встречи и ходить на мероприятия. Давайте создавать свои события.</div>
                </div>
            </div>
            <div className={styles.screen2}>
                <div className={styles.container}>
                    <h2><span className={styles.meeting}>Мероприятия</span><span className={styles.titleCity}> в Касселе</span></h2>
                    <Meetings />
                </div>
            </div>
            <div className={styles.screen3}>
                <div className={styles.superMeet}>
                    <span>Знаешь крутое мероприятие города? </span>
                    <Button title='поделись с другими' />
                </div>

            </div>
            <div className={styles.screen4}>
                <div className={styles.container}>
                    <h2><span className={styles.titleCity}>Ближайшие</span><span className={styles.meeting}> встречи</span></h2>
                    <Meetings />
                </div>
            </div>
            <div className={styles.screen5}>
                <div className={styles.myMeet}>
                    <span>Хочешь организовать встречу друзей?  </span>
                    <Button title='действуй' />
                </div>

            </div>
            <div className={styles.screen6}>
                <div className={styles.container}>
                    <h2><span className={styles.meeting}>Интересные</span><span className={styles.titleCity}> мероприятия</span> <span className={styles.meeting}>мира</span></h2>
                    <Meetings />
                </div>
            </div>


        </div>

    )
}

export default Home