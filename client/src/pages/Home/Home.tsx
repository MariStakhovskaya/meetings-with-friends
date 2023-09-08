import Header from '../../components/Header/Header';

import styles from './Home.module.css';

function Home() {

    return (
        <div className={styles.wrap}>
            <div className={styles.cloud1}></div>
            <div className={styles.container}>

                <div className={styles.screen1}>
                    <Header />

                    <div className={styles.woman}>

                        <div className={styles.cloud}></div>

                    </div>


                    <div className={styles.grass}></div>

                    <h1 className={styles.headerTitle}>События города для всех и каждого</h1>
                    <div className={styles.headerDescription}> Давайте вместе проводить время. Давайте организовывать встречи и ходить на мероприятия. Давайте создавать свои события.</div>
                </div>
            </div>
        </div>

    )
}

export default Home