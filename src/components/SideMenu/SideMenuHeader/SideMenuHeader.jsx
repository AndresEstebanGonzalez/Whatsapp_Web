import styles from "../SideMenuHeader/SideMenuHeader.module.scss";

import ProfilePicture from "../../../assets/images/profile-picture.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCircleNotch,
  faMessage,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

export default function SideMenuHeader() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img
          src={ProfilePicture}
          className={styles.profilePicture}
          alt="Profile Picture"
        />
      </div>
      <div className={styles.rightContainer}>
        <FontAwesomeIcon className={styles.icon} icon={faUsers} />
        <FontAwesomeIcon className={styles.icon} icon={faCircleNotch} />
        <FontAwesomeIcon className={styles.icon} icon={faMessage} />
        <FontAwesomeIcon className={styles.icon} icon={faEllipsisVertical} />
      </div>
    </div>
  );
}
