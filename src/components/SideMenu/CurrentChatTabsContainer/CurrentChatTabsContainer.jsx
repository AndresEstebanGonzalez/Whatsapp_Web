import styles from "./CurrentChatTabsContainer.module.scss";
import CurrentChatTabs from "./CurrentChatTabs/CurrentChatTabs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function CurrentChatTabsContainer() {
  return (
    <div className={styles.mainContainer}>
      <CurrentChatTabs />
      <CurrentChatTabs />
      <CurrentChatTabs />
      <CurrentChatTabs />
      <CurrentChatTabs />
      <div className={styles.bottomContainer}>
        <div className={styles.bottomTextContainer}>
          <FontAwesomeIcon icon={faLock} className={styles.lockIcon} />
          <p className={styles.bottomText}>
            Your personal messages are{" "}
            <button className={styles.lightBlueEncryptedText}>
              end-to-end encrypted
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
