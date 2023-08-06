import styles from "./App.module.scss";

import SideMenu from "./components/SideMenu/SideMenu.jsx";
import CurrentChatContainer from "./components/CurrentChatContainer/CurrentChatContainer.jsx";

function App() {
  return (
    <div className={styles.container}>
      <SideMenu />
      <CurrentChatContainer />
    </div>
  );
}

export default App;
