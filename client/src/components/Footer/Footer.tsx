import Logo from '../../assets/LogoHHWF.svg';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.container_logo}>
        <a href="#" className={styles.footer_logo}>
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className={styles.footer_contacts}>
        <a className={styles.contacts_link} href="#">
          Maria Stachovski
        </a>
        <a className={styles.contacts_link} href="#">
          Yuliya Lobzha
        </a>
        <a className={styles.contacts_link} href="#">
          Ludmila Drozd
        </a>
      </div>
    </footer>
  );
}

export default Footer;
