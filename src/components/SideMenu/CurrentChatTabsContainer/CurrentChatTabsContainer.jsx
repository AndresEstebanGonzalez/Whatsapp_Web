import styles from "./CurrentChatTabsContainer.module.scss";
import CurrentChatTabs from "./CurrentChatTabs/CurrentChatTabs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import chatDatabase from "../../../data.js";

export default function CurrentChatTabsContainer() {
  const CHAT = chatDatabase.map((chat) => {
    return <CurrentChatTabs key={chat.id} chat={chat} />;
  });

  return (
    <div className={styles.mainContainer}>
      <div>{CHAT}</div>
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
