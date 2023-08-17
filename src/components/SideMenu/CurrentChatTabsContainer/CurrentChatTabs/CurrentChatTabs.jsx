import styles from "./CurrentChatTabs.module.scss";

import chatDatabase from "../../../../data.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faThumbTack } from "@fortawesome/free-solid-svg-icons";

export default function CurrentChatTabs(props) {
  const { firstName, lastName, pictureUrl, message } = props.chat;

  const CHECK_MARK_STYLE = message.isLastMessageRecieved
    ? { display: "none" }
    : message.isLastMessageRead
    ? { color: "#53bdeb" }
    : { color: "#aebac1" };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img
          src={pictureUrl}
          className={styles.profilePicture}
          alt="Chat profile picture"
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.topContainer}>
          <h3 className={styles.chatName}>
            {firstName} {lastName}
          </h3>
          <p className={styles.lastMessageTime}>
            {message.lastMessageTimestamp}
          </p>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomLeftContainer}>
            <FontAwesomeIcon
              icon={faCheck}
              className={styles.checkMark}
              style={CHECK_MARK_STYLE}
            />
            <p className={styles.lastMessage}>{message.lastMessage}</p>
          </div>
          <FontAwesomeIcon icon={faThumbTack} className={styles.thumbTack} />
        </div>
      </div>
    </div>
  );
}
