import styles from "./CurrentChatTabs.module.scss";

import ProfilePicture from "../../../../assets/images/profile-picture.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faThumbTack } from "@fortawesome/free-solid-svg-icons";

export default function CurrentChatTabs() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img
          src={ProfilePicture}
          className={styles.profilePicture}
          alt="Chat profile picture"
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.topContainer}>
          <h3 className={styles.chatName}>My Love</h3>
          <p className={styles.lastMessageTime}>16:36</p>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomLeftContainer}>
            <FontAwesomeIcon icon={faCheck} className={styles.checkMark} />
            <p className={styles.lastMessage}>Ufa</p>
          </div>
          <FontAwesomeIcon icon={faThumbTack} className={styles.thumbTack} />
        </div>
      </div>
    </div>
  );
}
