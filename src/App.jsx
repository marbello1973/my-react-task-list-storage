import styles from "./App.module.css";
import Navbar from "./views/Navbar/Navbar";

function App() {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
