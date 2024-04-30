import Display from "./comonents/Display";
import ButtonsContainer from "./comonents/ButtonsContainer";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
