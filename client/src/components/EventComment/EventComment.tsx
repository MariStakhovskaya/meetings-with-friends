import styles from './EventComment.module.css';

type EventCommentType = {
  name: string;
  date: string;
  comment: string;
};

function EventComment({ name, date, comment }: EventCommentType) {
  return (
    <div className={styles.comment_container}>
      <div className={styles.comment_header}>
        <p className={styles.comment_name}>{name}</p>
        <p className={styles.comment_date}>{date}</p>
      </div>
      <p className={styles.comment_text}>{comment}</p>
    </div>
  );
}

export default EventComment;
