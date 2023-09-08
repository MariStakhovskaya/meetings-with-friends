import Logo from '../../assets/LogoHHWF.svg';

import styles from './Header.module.css';

function Header() {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <a href="#">
                        <img src={Logo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <nav>
                    <a href="#">
                        Регистрация
                    </a>
                    <div className={styles.languges}>
                        <a href="#"> De </a>
                        <a href="#">Ru </a>
                        <a href="#"> Eng </a>
                    </div>
                </nav>
            </header>
        </div>

    )
}

export default Header