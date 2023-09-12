import Meeting from './Meeting/Meeting';
import styles from './Meetings.module.css'


import meet1 from '../../assets/meet1.png';



function Meetings() {

    return (
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

    )
}

export default Meetings