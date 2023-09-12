import Header from '../../components/Header/Header';
import Meeting from '../../components/Meeting/Meeting';

import meet1 from '../../assets/meet1.png';

import styles from './Home.module.css';

function Home() {

    return (
        <div className={styles.wrap}>

            <div className={styles.container}>

                <div className={styles.screen1}>
                    <Header />

                    <div className={styles.woman}>

                        <div className={styles.cloud}></div>
                        {/* <div className={styles.cloud1}></div> */}
                    </div>


                    <div className={styles.grass}></div>

                    <h1 className={styles.headerTitle}>События города для всех и каждого</h1>
                    <div className={styles.headerDescription}> Давайте вместе проводить время. Давайте организовывать встречи и ходить на мероприятия. Давайте создавать свои события.</div>
                </div>
                <div className={styles.screen2}>
                    <h2><span className={styles.meeting}>Мероприятия</span><span className={styles.titleCity}> в Касселе</span></h2>
                    <div className={styles.wrapMeetings}>
                        <Meeting
                            title={'спорт укрепляет здоровье игра в бейсбол между командами города'}
                            url={meet1}
                            date={'1 СЕНТЯБРЯ'}
                            category={'СПОРТ'}
                            alt={'аука ауа'} />
                        <Meeting
                            title={'спорт укрепляет здоровье игра в бейсбол между командами города'}
                            url={meet1}
                            date={'1 СЕНТЯБРЯ'}
                            category={'СПОРТ'}
                            alt={'аука ауа'} />
                        <Meeting
                            title={'спорт укрепляет здоровье игра в бейсбол между командами города'}
                            url={meet1}
                            date={'1 СЕНТЯБРЯ'}
                            category={'СПОРТ'}
                            alt={'аука ауа'} />
                        <Meeting
                            title={'спорт укрепляет здоровье игра в бейсбол между командами города'}
                            url={meet1}
                            date={'1 СЕНТЯБРЯ'}
                            category={'СПОРТ'}
                            alt={'аука ауа'} />

                    </div>

                </div>
            </div>

        </div>

    )
}

export default Home