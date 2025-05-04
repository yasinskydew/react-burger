import styles from './app.module.css';
import AppHeader from '../header/header';
import Main from '../main/main';

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
