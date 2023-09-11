import styles from './Meeting.module.css';

type MeetingType = {
    title: string,
    url: string,
    date: string,
    category: string,
    alt: string
}

function Meeting({ title, url, date, category, alt }: MeetingType) {

    return (
        <div className={styles.oneMeeting}>
            <img src={url} alt={alt} />
            <div className={styles.aboutMeeting}>
                <div className={styles.dateMeeting}>{date}</div>
                <div className={styles.categoryMeeting}>{category}</div>
            </div>
            <div className={styles.titleMeeting}>{title}</div>
        </div>

    )
}

export default Meeting