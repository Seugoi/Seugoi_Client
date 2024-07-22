import styles from '../styles/splash/Splash.module.css';

function SplashPage() {
  return (
    <div className={styles['container']}>
      <img
        src={process.env.PUBLIC_URL + '/images/logo.png'}
        alt="logo"
      />
    </div>
  );
}

export default SplashPage;