import { useState } from 'react';
import styles from './Auth.module.css';

function Auth() {
  const [activePanel, setActivePanel] = useState(false);
  const handleChangeActive = () => {
    setActivePanel((prev) => !prev);
    console.log('+');
  };
  return (
    <div className={`${styles.container} ${activePanel ? `${styles.right_panel_active}` : ''}`}>
      <div className={`${styles.form_sign_up} ${styles.form_container}`}>
        <form action="#" className={styles.auth_form}>
          <h2 className={`${styles.auth_title} ${styles.title_margin}`}>Create Account</h2>
          <p className={styles.auth_text}>or use your email for registration</p>
          <div className={styles.form_direction}>
            <input className={styles.auth_input} type="text" placeholder="Name" />
            <input className={styles.auth_input} type="email" placeholder="Email" />
            <input className={styles.auth_input} type="password" placeholder="Password" />
          </div>
          <button className={styles.auth_button}>Sign Up</button>
        </form>
      </div>

      <div className={`${styles.form_sign_in} ${styles.form_container}`}>
        <h2 className={`${styles.auth_title} ${styles.title_margin}`}>Sign in</h2>
        <p className={styles.auth_text}>or use your account</p>
        <div className={styles.form_direction}>
          <input className={styles.auth_input} type="email" placeholder="Email" />
          <input className={styles.auth_input} type="password" placeholder="Password" />
        </div>
        <span className={`${styles.auth_text} ${styles.span_margin}`}>forgot your password?</span>
        <button className={styles.auth_button}>Sign In</button>
      </div>

      <div className={styles.container_overlay}>
        <div className={styles.overlay}>
          <div className={`${styles.overlay_left} ${styles.overlay_panel}`}>
            <h2 className={styles.auth_title}>Welcome Back!</h2>
            <p className={styles.auth_text}>
              to keep connected with us please login with your personal info
            </p>
            <button
              className={`${styles.ghost}  ${styles.auth_button}`}
              onClick={handleChangeActive}>
              Sign in
            </button>
          </div>
          <div className={`${styles.overlay_right} ${styles.overlay_panel}`}>
            <h2 className={styles.auth_title}>Hello, Friend!</h2>
            <p className={styles.auth_text}>
              Enter your personal details and start journey with us
            </p>
            <button
              className={`${styles.ghost}  ${styles.auth_button}`}
              onClick={handleChangeActive}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
