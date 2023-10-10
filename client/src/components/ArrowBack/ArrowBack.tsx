import styles from './ArrowBack.module.css';
import arrow from '../../assets/arrowBack.png';

type ArrowBackType = {
  title: string;
};

function ArrowBack({ title }: ArrowBackType) {
  // В зависимости от роута цвет заголовка меняется от того, который есть на #FF5001
  return (
    <div className={styles.eventsList_header}>
      <div className={styles.arrow_container}>
        <img src={arrow} alt="Arrow Back" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default ArrowBack;
